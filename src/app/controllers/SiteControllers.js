 
const Course = require("../models/Course");
const {multibleMongonoseToOject} = require("../../util/mongoose")

class SiteControllers{

    // [GET] /
    index(req, res, next){
        Course.find({})
            .then(courses => {
                res.render("home", {
                    courses: multibleMongonoseToOject(courses)
                })
            })
            .catch(next)
    }

    //[get] /search
    search(req, res){
        res.render('search');
    }


}

module.exports = new SiteControllers;