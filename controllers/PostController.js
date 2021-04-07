const Posts = require('./model/postModel');
// const fs =require('fs')

module.exports.show = (req, res, next) =>{
    let posts = Posts.find()
    .then((posts) =>{
        res.json(posts);
    })
    .catch((err) =>{
        res.status(400).send(err)
    })
};

module.exports.showId = (req, res) =>{
    let postId = req.params.postId;
    Posts.findOne({_id: postId})
    .then(posts =>{
        res.json(posts);
    })
    .catch(err =>{
        res.status(400).send(err)
    })
}

module.exports.create = (req, res) =>{
    res.render('posts/create')
}

module.exports.addPost = (req, res) =>{
    let {name, address, description, phone }= req.body;
    let newFilename = req.file;
    let posts = new Posts({
        name: name,
        address:address,
        description:description,
        phone: phone,
        avatar:newFilename,
    });
    return posts.save()
    .then((posts) =>{
      res.json(posts);
    //   console.log(posts, '[posts]');
    })
    .catch((err) =>{
        console.log(err, '[err]');
    })
    // res.json( req.file)
    // console.log(req.body);
    
}

module.exports.showAddPost = (req, res) =>{
    Posts.find({})
    .then(posts =>{
        res.json(posts)
      console.log(posts, '[posts]');
    })
    .catch(err =>{
        res.status(400).send(err)
    })
}

module.exports.update = (req, res) =>{
    let postId = req.params.postId;
    let {name, address, description, phone }= req.body;
    let updatePost = new Posts({ 
        name: name,
        address:address,
        description:description,
        phone: phone,
        // avatar: req.file.filename
    });
    return updatePost.findByIdAndUpdate({_id:postId})
    .then((posts) => {
        res.json(posts)
    })
    .catch((err) =>{
        res.status(400).send(err)
    })
}

module.exports.delete = (req, res) =>{
    let postId = req.params.postId;
    Posts.findByIdAndDelete({_id:postId})
    .then((posts) => {
        res.json(posts)
    })
    .catch((err) =>{
        res.status(400).send(err)
    })
}

