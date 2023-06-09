module.exports.home = function(req, res){
    // return res.send("<h1>Express is running</h1>");
    return res.render('home',{
        title : "Home"
    })
}