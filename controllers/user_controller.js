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
module.exports.create = function(req , res){

}

//user login and create session
module.exports.createSession = function(req , res){
    
}