const Posts = require('../model/postModel');

const fuzzySearch = (text) => {
    const regex = text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    return new RegExp(regex, 'gi');
}

module.exports.getPost = (req, res) =>{
    const { q } = req.query;
    const conditionFind = {};
    if (q) {
        conditionFind.address = fuzzySearch(q)
        }
    Posts.find(conditionFind)
    .then((posts) =>{
        res.json(posts);
    })
    .catch((err) =>{
        res.status(400).send(err)
    })
};

module.exports.getIdPost = (req, res) =>{
    let postId = req.params.postId;
    Posts.findOne({_id: postId})
    .then(posts =>{
        res.json(posts);
    })
    .catch(err =>{
        res.status(400).send(err)
    })
}

module.exports.addPost =  (req, res) =>{
        const {name, address, description, phone,avatar }= req.body;
        const file = req.file.originalname;
        const posts = new Posts({
            name: name,
            address:address,
            description:description,
            phone: phone,
            avatar:file,
        });
        return posts.save()
        .then((posts) =>{
          res.json(posts);
        })
        .catch((err) =>{
            alert('err')
            res.status(400).send(err)
        })
    }


module.exports.updatePost = (req, res) =>{
    let postId  = req.params.postId;
    return Posts.findByIdAndUpdate({_id:postId},req.body)
    .then((posts) => {
        res.json({message:"update success",posts})
    })
    .catch((err) =>{
        res.status(400).send(err)
    })
}

module.exports.deletePost = (req, res) =>{
    let postId = req.params.postId;
    Posts.findByIdAndDelete({_id:postId})
    .then((posts) => {
        res.json(posts)
    })
    .catch((err) =>{
        res.status(400).send(err)
    })
}

// module.exports.search = (req, res) =>{
//     var name = req.query.name;
//     var data = posts.filter(function(post){
//         return post.name.toLowerCase().indexOf(name.toLowerCase())!==-1;
//     })
//     .then(res =>{
//         res.json(data)
//     })
// }