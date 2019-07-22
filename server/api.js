
const {blogModel, getLastBlogCreated} = require('./models')
var bodyParser = require('body-parser');

const registerApi = function(app) {
    app.use(bodyParser.json({limit: '10mb', extended: true}));
    app.use(bodyParser.urlencoded({ extended: false }));

    app.get('/api/test', async (req, res)=> {
        res.send('hi guy')
    })

    app.post('/api/ceateBlog', async (req, res)=>{
        console.log("get post: ", req.body);
        
        // valid data before saving 
        try {
            let keys = Object.keys(req.body)

            if (!keys.find(k=>(k === "title"))) {
                throw Error("lack title field")
            } else if (!keys.find(k=>(k === "content"))) {
                throw Error('lack of content field')
            }
        } catch (error) {
            res.json({
                        saveBlogStatus: "fail",
                        reason:  error.message
                })
            return  
        }

        let r = new blogModel(req.body)
        await r.save()
                .then(doc=>{
                    res.json({
                        saveBlogStatus: "successful"   
                    })
                })
                .catch(err=>{
                    res.json({
                        saveBlogStatus: "fail",
                        reason:  err.message
                    })
                })
    })

    app.get('/api/getLatestBlog', async (req, res)=>{
        let r = await getLastBlogCreated()
        res.send(r)
    })

    app.get('/api/getBlogByDate', async (req, res)=> {
        let r = await blogModel.find({date: new Date(req.param('date'))}).exec()
        res.send(r[0])
    })

    app.get('/api/getBlogsBeforeDate', async (req, res)=>{
        let date = req.param('date')
        date = new Date(date)
        console.log("get blogs after date: ", date)
        
        let numBlogsGet = 10
        if(req.param('num')) numBlogsGet = req.param('num')

        let blogsFound = await blogModel
                                    .find({date: {"$lt": date}})
                                    .limit(numBlogsGet)
                                    .exec()
        res.send(blogsFound)  
    })  
}

module.exports = registerApi
