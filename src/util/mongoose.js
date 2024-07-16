module.exports = {
    multibleMongonoseToOject :  (mongooses) => mongooses.map(m => m.toObject()),
    mongooseToOject : (mongoose) => mongoose ? mongoose.toObject() : mongoose
}