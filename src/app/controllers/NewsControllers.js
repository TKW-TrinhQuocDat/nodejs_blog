const Course = require('../models/Course');
class NewsControllers{

    // [GET] /news
    index(req, res, next){
     
        Course.find({})
            .then(course => res.json(course))
            .catch(error => next(error));
        
    }
    //[get] /news/:slug
    show(req, res){
        res.send("show detail!!");
    }


}

module.exports = new NewsControllers;