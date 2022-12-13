
const { response } = require('express')
const { mongooseToObject } = require('../../util/mongoose')
const Courses = require('../model/courses')


class EditController{
    index(req,res,next){
        
            Courses.courses1.findById(req.params.id)
            .then(course => res.render('courses/edit',{course: mongooseToObject(course)}))
            .catch(next)
           
            
        }  
       
        index2(req,res,next){
        
            Courses.courses1.findById(req.params.id)
            .then(course => res.render('courses/delete',{course: mongooseToObject(course)}))
            .catch(next)
           
            
        }  
        update(req,res,next){      
            Courses.courses1.updateOne({_id: req.params.id},req.body)
            .then(()=> res.redirect('/me/stored/courses'))
            .catch(next)
        } 
        delete(req,res,next){      
            Courses.courses1.deleteOne({_id: req.params.id},req.body)
            .then(()=> res.redirect('/me/stored/courses'))
            .catch(next)
        }  
        
    
}


module.exports = new EditController()

