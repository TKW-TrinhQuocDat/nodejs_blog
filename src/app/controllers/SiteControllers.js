class NewsControllers{

    // [GET] /news
    index(req, res){
        res.render('news');
    }

    //[get] /news/:slup
    show(req, res){
        res.send("show detail!!");
    }


}

module.exports = new NewsControllers;