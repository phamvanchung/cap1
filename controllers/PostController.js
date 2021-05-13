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

module.exports.showImg = (req, res) =>{
    // Posts.find().toArray((err,files)=>{
        // const imgArray= result.map(element => element._id);
        // console.log(imgArray);
        // if (err) return console.log(err)
        // res.send(imgArray)
        
    // })
}



module.exports.showImgId = (req, res) =>{
    // var filename = req.params.id;
    // var ObjectId = require('mongodb').ObjectId; 
    // var id = req.params._id;       
    // var filename = new ObjectId(id);
    // let posts = Posts.findOne({'_id': filename},(err, result) => {
    //     if (err) return console.log(err)
    //     res.contentType('image/jpeg');
    //     res.json(posts)

    // })
}