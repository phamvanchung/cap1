const Posts = require('../model/postModel');
// const fs =require('fs')

module.exports.getPost = (req, res, next) =>{
    let posts = Posts.find()
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

module.exports.create = (req, res) =>{
    res.render('posts/create')
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
            console.log(err, '[err]');
            alert('err')
        })
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

module.exports.updatePost = (req, res) =>{
    let postId = req.params.postId;
    let {name, address, description, phone }= req.body;
    let updatePost = new Posts({ 
        name: name,
        address:address,
        description:description,
        phone: phone,
    });
    return Posts.findByIdAndUpdate({_id:postId},{$set:updatePost})
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