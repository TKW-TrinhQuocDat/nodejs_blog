const Course = require('../models/Course');
const {mongooseToOject} = require('../../util/mongoose')
class NhacControllers{
    
    //[get] /nhac/:slug
    show(req, res, next){
        Course.findOne({slug : req.params.slug})
            .then(nhac => res.render('./nhac/show', { nhac : mongooseToOject(nhac) }))
            .catch(next)
    }
    
     
    //[get] /nhac/newnhac
    newnhac(req, res, next){
        Course.findOne({slug : req.params.slug})
            .then(nhac => res.render('./nhac/newnhac', { nhac : mongooseToOject(nhac) }))
            .catch(next)
    }
     //[post] /nhac/store
    store(req, res, next){
        const fromData = req.body;
        fromData.image = `http://img.youtube.com/vi/${fromData.videoId}/sddefault.jpg`;
        const nhac = new Course(fromData);
        nhac.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            })

    }
    //[get] /nhac/:id/edit
    edit(req, res, next){
        Course.findById(req.params.id)
            .then(nhac => res.render("./nhac/edit", { nhac : mongooseToOject(nhac)}))
            .catch(next)
    }
      //[put] /nhac/:id/
    update(req, res, next){
        Course.updateOne({ _id: req.params.id}, req.body)
            .then(() => res.redirect("/me/stored/nhacs"))
            .catch(next)
    }
}

module.exports = new NhacControllers;