var mongoose = require('mongoose');
const Schema = mongoose.Schema;

MONGO_URL = 'mongodb://chauvoluuhuong:Livetoride01@ds012889.mlab.com:12889/my-blog'

const blogSchema = new Schema({
    date: { type: Date, default: Date.now },
    title: String,
    content: String,
    brief: String,
    tags: []
})

const blogModel = mongoose.model('blogModel', blogSchema)

async function getLastBlogCreated() {
    let doc = await blogModel.find({}).sort({_id: -1}).limit(1).exec()
    return doc[0]
}

console.log("connect to MONGO_URL: ", MONGO_URL)
mongoose.connect(MONGO_URL, {useNewUrlParser: true}, err=>{
    if(!err) {
        console.log(("connected to DB"));
    } else {
        console.log(err)
    }
})

module.exports = {
    blogModel: blogModel,
    getLastBlogCreated: getLastBlogCreated
}