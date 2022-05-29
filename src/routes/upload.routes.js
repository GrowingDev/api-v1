module.exports = (app) => {
  var router = require("express").Router();
  let multer = require("multer");

  const DIR = "./public/images";


  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, fileName)
    }
  });

  var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('File type not accepted (.png, .jpg, .jpeg)'));
        }
    }
});

  router.post('/', upload.array('imagesArray', 8), (req, res, next) => {
    const reqFiles = [];

    const url = req.protocol + '://' + req.get('host')

    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/public/images' + req.files[i].filename)
    }
    console.log(reqFiles)
    res.send(reqFiles)
})
  app.use("/api/images/", router);
};
