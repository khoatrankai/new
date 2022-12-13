const Courses = require('../model/courses')
// const {mutipleMongooseToObject} = require('../../util/mongoose')


class CreateController{
    create(req,res,next){

            res.render('./courses/create')
    }
    store(req,res,next){
        const course = new Courses(req.body)
        course.save()
        .then(()=> res.redirect('/'))
        .catch(err => {
            
        })
    }
    search(req,res){
        res.render('search')
    }
}


module.exports = new CreateController()