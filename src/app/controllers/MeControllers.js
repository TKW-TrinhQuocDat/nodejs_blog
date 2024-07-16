const Course = require('../models/Course');
const {multibleMongonoseToOject} = require('../../util/mongoose')
class MeControllers{
    
    //[get] /me/stored/nhac
    storedNhac(req, res, next){
        Course.find({})
            .then(nhac => res.render("./me/storedNhac", {
                nhac : multibleMongonoseToOject(nhac)
            }))
            .catch(next)
    }
    
}

module.exports = new MeControllers;