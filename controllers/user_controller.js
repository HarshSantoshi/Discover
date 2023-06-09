module.exports.profile = function(req,res){
    console.log("profile page");
    return res.send('<h1>User Profile</h1>')
}