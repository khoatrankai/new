const Courses = require('../model/courses')
Courses.courses1.findOne({_id: '6332713cd720dcdba9f2c860'})
            .then(course => {
                console.log(course);
               
            })
            .catch(err => err)

    console.log(Courses.courses1[0]+"ok");



class OrderController{
    index(req,res,next){
            
        
           Courses.courses1.findOne({_id: req.params.id})
            .then(course => {
                console.log(course);
                res.render('order',{name: course.name,price: course.price, img: course.img})
            })
            .catch(next)


            
       
        
        
    }
    
}


module.exports = new OrderController()