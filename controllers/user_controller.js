const User = require('../models/user')
module.exports.profile = function(req,res){
    // console.log("profile page");
    // return res.send('<h1>User Profile</h1>')
    return res.render('profile' ,{
        title: " Profile"
    })
}
//render signup page
module.exports.signUp = function(req ,res){
    return res.render('user_signup.ejs', {
        title:"Social | Sign up"
    })
}
//render signin page
module.exports.signIn = function(req ,res){
    return res.render('user_signin.ejs', {
        title:"Social | Sign In"
    })
}
//get user data
module.exports.create = function (req, res) {
    console.log(req.body);
    if (req.body.password !== req.body.confirm_password) {
        return res.redirect('back');
    }
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return User.create(req.body);
            } else {
                return Promise.reject('User already exists'); // Reject the promise if user exists
            }
        })
        .then(user => {
            return res.redirect('/users/signin');
        })
        .catch(err => {
            console.log('Error in creating or finding user while signing up:', err);
            return res.redirect('back');
        });
};


//user login and create session
module.exports.createSession = function(req , res){
    return res.redirect('/');
}