var multer = require('multer');

//luu tru img user
var storageUser = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads/users'); //hỉnh ảnh sẽ chưa trong folder uploads
    },
    filename: (req, file, cb) => {
        cb(null , file.originalname); ;// mặc định sẽ save name của hình ảnh
        // là name gốc, chúng ta có thể rename nó.  
    }
})
var uploadUser = multer({
    storage:storageUser,
    limits:{
        fieldSize: 1024 * 1024 * 3,
    }
}); //save trên local của server khi dùng multer


//luu tru img post
var storagePost = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads/posts'); //hỉnh ảnh sẽ chưa trong folder uploads
    },
    filename: (req, file, cb) => {
        cb(null , file.originalname); ;// mặc định sẽ save name của hình ảnh
        // là name gốc, chúng ta có thể rename nó.  
    }
})
var uploadPost = multer({
    storage:storagePost,
    limits:{
        fieldSize: 1024 * 1024 * 3,
    }
}); //save trên local của server khi dùng multer


//luu tru img shop
var storageShop = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads/shops'); //hỉnh ảnh sẽ chưa trong folder uploads
    },
    filename: (req, file, cb) => {
        cb(null , file.originalname); ;// mặc định sẽ save name của hình ảnh
        // là name gốc, chúng ta có thể rename nó.  
    }
})
var uploadShop = multer({
    storage:storageShop,
    limits:{
        fieldSize: 1024 * 1024 * 3,
    }
}); //save trên local của server khi dùng multer

module.exports = {uploadUser,uploadPost,uploadShop};

