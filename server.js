const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
let itemModel = require("./models/item");
let data = require("./src/data/data.json");
let routes = require("./routes");
let cors = require("cors");
let passport = require("passport");
let LocalStrategy = require("passport-local");
let session = require("express-session");
let User = require("./models/User");
let path = require("path");
let bcrypt = require("bcryptjs");

app.use(cors());
//converts to readable js object
app.use(express.json());
//takes objects from forum submit and converts when its in html
app.use(express.urlencoded({ extended: true }));
//session is for each user to keep track of
app.use(
  session({
    secret: "2334",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 60 * 24 }
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);
//serving images to have access
app.use(express.static(path.join(__dirname, "build")));

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/fashion_site",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected");
    let allItems = [].concat(
      data.shirts,
      data.hoodies,
      data.sunglasses,
      data.tops,
      data.womens_hoodies,
      data.womens_sunglasses
    );
    itemModel.remove({}).then(() => {
      return itemModel.insertMany(allItems).then(data => {
        // console.log(data);
      });
    });
  });
passport.serializeUser((user, done) => {
  console.log("serializeUser");
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(
  new LocalStrategy((email, password, done) => {
    console.log(email, password, "passport");
    User.findOne({ email })
      .then(user => {
        if (!user) {
          return done(null, false, { message: "wrong email" });
        }
        bcrypt.compare(password, user.password).then(isPassword => {
          console.log(isPassword, "!!!!!!@@@passswords");
          if (isPassword) {
            return done(null, user, user.password);
          }
          return done(null, false, { message: "wrong password" });
        });
      })
      .catch(err => done(err));
  })
);

app.post("/login", passport.authenticate("local"), function(req, res) {
  console.log("login in");
  console.log(req.session, "*********session");
  const user = { email: req.user.email, id: req.user._id, cart: req.user.cart };
  res.cookie("user", user.id, { maxAge: 5000000 });
  res.json({ message: "login was successful", user });
});

app.post("/logout", function(req, res) {
  req.logout();
  res.json({ message: "logout was successful" });
});

app.post("/signup", function(req, res) {
  bcrypt
    .hash(req.body.password, 10)
    .then(hashedPassword => {
      return User.create({
        email: req.body.email,
        password: hashedPassword
      });
    })
    .then(user => {
      res.json({ message: "signup was successful" });
    })
    .catch(err => {
      res.status(422).send({ message: "try signing up again" });
    });
});

//sending react information
app.get("/*", (req, res) => {
  console.log(req.user);
  console.log(req.session.passport);
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server up on PORT: ${PORT}`);
});
