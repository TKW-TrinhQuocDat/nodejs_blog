const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/blog_dev');
        console.log('connect successfull!!');
    } catch (error) {
        console.log('connect fail!!!');
    }
}

module.exports = { connect };