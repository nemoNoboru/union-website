var tinify = require("tinify");
var fs = require('fs')

// setup my api key
tinify.key = 'oSpKyf2tDQpk5jhpxVxZBcBBel0KeZAK'

// get the images to tinify
var files = fs.readdirSync('.')
var imageFiles = []
files.forEach(function (file) {
  if(/.jpg|.png/.test(file)){
    console.log(file + 'is a image')
    imageFiles.push(file)
  }
})

// tinify each image
imageFiles.forEach( function(image) {
  console.log('minifying image...: '+image)
  var source = tinify.fromFile(image)
  var resized = source.resize({
    method: "scale",
    width: 1920,
  });
  resized.toFile(image+'.min');
  console.log('ok')
})
