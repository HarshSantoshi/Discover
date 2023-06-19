module.exports.profile = function(req,res){
    // console.log("profile page");
    // return res.send('<h1>User Profile</h1>')
    return res.render('profile' ,{
        title: " Profile"
    })
}