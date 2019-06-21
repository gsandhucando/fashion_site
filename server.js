const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3001;
let itemModel = require("./models/item");
let data = require("./src/data/data.json");
let routes = require("./routes");
let cors = require("cors");
let passport = require("passport");
let LocalStrategy = require("passport-local");
let session = require("express-session");
let User = require("./models/User");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({ secret: "2334", resave: true, saveUninitialized: true, cookie: {} })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

mongoose
  .connect("mongodb://localhost:27017/fashion_site", { useNewUrlParser: true })
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

passport.use(new LocalStrategy((email, password, done)=> {
  console.log(email, password, 'passport')
  User.findOne({email})
  .then(user => {
    if (!user) {
      return done(null, false, {message: 'wrong email'})
    }
    if (user.password === password) {
      return done(null, user)
    } else {
      return done(null, false, {message: 'incorecct password'})
    }
  }).catch(err => done(err))
}))

app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    console.log('login in')
    res.json({message: 'login was successful', user: {email: req.user.email, id: req.user._id, cart: req.user.cart}})
  });

  app.post('/logout',
  function(req, res) {
    req.logout();
    res.json({message: 'logout was successful'})
  });

  app.post('/signup',
  function(req, res) {
    User.create(req.body)
    .then(user => {
      res.json({message: 'signup was successful'})
    }).catch(err => {
      res.status(422)
      .send({message: 'try signing up again'})
    })
  });

app.listen(PORT, () => {
  console.log(`server up on PORT: ${PORT}`);
});
