var multer = require('multer');
const path =require('path')

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        
        cb(null, './public/uploads/posts'); //hỉnh ảnh sẽ chưa trong folder uploads
       
    },
    filename: (req, file, cb) => {
        cb(null , file.originalname); ;// mặc định sẽ save name của hình ảnh
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

// var storage = multer.diskStorage({
//         destination: function (req, file, cb) {
//       cb(null, 'public/uploads/posts')
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now()  + "-" + file.originalname)
//     }
// });  
// var upload = multer({ 
//         storage: storage,
//     fileFilter: function (req, file, cb) {
//             console.log(file);
//         if(file.mimetype=="image/bmp" || file.mimetype=="image/png" || file.mimetype=="image/jpg"|| file.mimetype=="image/gif"){
//             cb(null, true)
//         }else{
//             return cb(new Error('Only image are allowed!'))
//         }
//     }
// })



