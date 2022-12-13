
const Courses = require('../model/courses')
const {mutipleMongooseToObject} = require('../../util/mongoose')

// function ren()
// {
//     console.log(Courses)
//     for(let i in Courses)
//     {
//         console.log(i)
//     }

//     Courses.courses1.find({}).then(course => 
//         {
//             console.log(mutipleMongooseToObject(course))
//             let so = course[4] +","+ course[1]
//             console.log(typeof(course))
//         }
//             )
//         .catch()
// }
// ren()
class OrderController{
    index(req,res,next){

        // res.send("ok")
        
        Courses.courses1.find({})
        .then(
            course => {
                let a = course;
                Courses.courses2.find({})
                .then(course2 => {
                    let b = course2;
                    res.render('home',{courses1: mutipleMongooseToObject(a), courses2: mutipleMongooseToObject(b)})
                })
                .catch()
                
            }
        ).catch(next)
        
        
      
    }
    // index2(req,res,next){

    //     Courses.courses1.find({})
    //     .then(courses => {
            
    //         res.render('home',{courses1: mutipleMongooseToObject(courses)})
    //         Courses.courses1.find({},function (err,course){
    //             res.render('home',{course2: mutipleMongooseToObject(course)}) 
    //         })
    //     })
    //     .catch(next)
      
    // }
    search(req,res){
        res.render('search')
    }
    show(req,res,next)
    {
        Courses.find({}, function(err, courses){
            if(!err) res.json(courses);
            res.status(400).json({error: 'ERROR!!!'})
            
        });
    }
}

module.exports = new OrderController()

