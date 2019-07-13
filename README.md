https://sonu-fashion.herokuapp.com/ <---hosted project

Technologies Used: ReactJS, HTML5, CSS3, NodeJS, ExpressJS, MongoDB, Mongoose, Redux, fontAwesome, axios, bcrypt, passport local strategy.

This is a full stack project and is hosted on heroku, please allow it to take 10-20 seconds to load.
Created REST API of clothing items which includes, images, prices, names, colors and categories.
Used local strategy authentication. There are two options at checkout, sign in with email: guest@guest.com password: 123456, or sign up wait a few seconds for heroku to register and sign in.
The password is hashed using bcryptjs.
Each user is tracked by a session cookie that has a max life of 24 hours.
Once signed in cart keeps track of the number of items using Redux.
