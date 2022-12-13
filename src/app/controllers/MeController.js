
const Courses = require('../model/courses')
const {mutipleMongooseToObject} = require('../../util/mongoose')


class MeController{
    storeCourses(req,res,next){
        
        Courses.courses1.find({})
        .then(courses => {
            
            res.render('me/store-courses',{courses: mutipleMongooseToObject(courses)})
        })
        .catch(next)
    }
}


module.exports = new MeController()

