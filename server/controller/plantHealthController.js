const axios = require("axios");
let fs = require("fs");
const multer = require("multer");
const path = require("path");


let fileName;
//upload images to pupilc
const storageSet = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    fileName = "a" + Date.now() + path.extname(file.originalname);
    cb(null, fileName);
  },
});

let upload= multer({ storage: storageSet }).single("plant");
module.exports.plant_health = async (req,res) => {
    upload(req, res, async (err) => {
      if(err) throw err.message;   
    const files = [`./public/${fileName}`]
    const base64files = files.map((file) => fs.readFileSync(file, "base64"));
    try {
      const data = {
        api_key: process.env.PLANT_ID_API_KEY,
        images: base64files,
        /* modifiers  */
        modifiers: ["crops_fast", "similar_images"],
        plant_language: "en",
        /* plant details */
        plant_details: [
          "common_names",
          "url",
          "name_authority",
          "wiki_description",
          "taxonomy",
          "synonyms",
        ],
      };
      await axios
        .post("https://api.plant.id/v2/health_assessment", data)
        .then((response) => {
          console.log("Success:", response.data);
          res.send(response.data);
        })
       
    } catch (err) {
      console.log('catch error',err.message,);
    }
  })
  }
  