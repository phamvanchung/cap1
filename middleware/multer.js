var multer = require('multer');
const path =require('path')

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        
        cb(null, './public/uploads'); //hỉnh ảnh sẽ chưa trong folder uploads
    },
    filename: (req, file, cb) => {
        cb(null , file.originalname + '-' + Date.now()); ;// mặc định sẽ save name của hình ảnh
        // là name gốc, chúng ta có thể rename nó.  
    }
})

var upload = multer({
    storage:storage,
    limits:{
        fieldSize: 1024 * 1024 * 3,
    }
}); //save trên local của server khi dùng multer

module.exports = upload;

