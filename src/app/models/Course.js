const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.set('strictQuery', false);


mongoose.plugin(slug);

const Course = new Schema({
    name: {type: String, required: true,},
    description: {type: String, maxLength: 650},
    image: {type: String, maxLength: 255},
    videoId: {type: String, maxLength: 255},
    level: {type: String, maxLength: 255},
    slug: { type: String, slug: "name", unique: true },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
  
}, {
    timestamps : true,
});

module.exports = mongoose.model('Course', Course);