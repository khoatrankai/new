const { default: mongoose } = require("mongoose");
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const schema = mongoose.Schema

const Courses = new schema({
    id: {type: String, required: true},
    vung:{type: String, required: true},
    name: {type: String, required: true},
    img: {type: String, required: true},
    price: {type: String, required: true},
    slug: {type: String, slug: 'name'},
},{
    timestamps: true,
})

const ProductsCatalog = new schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    slug: {type: String, slug: 'name'},
},{
    timestamps: true,
})

const courses1 = mongoose.model('Courses', Courses)
const courses2 = mongoose.model('Courses2', Courses)
const productscatalog = mongoose.model('productscatalog', ProductsCatalog);

module.exports = {courses1, courses2,productscatalog};