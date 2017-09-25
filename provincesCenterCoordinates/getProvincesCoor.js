'use strict';

const jsonfile = require('jsonfile');
const file = 'document.json';

// const newFile = 'provinces/test.json';
 

  // var file = '/tmp/data.json'
  //   var obj = {name: 'JP'}


jsonfile.readFile(file, (err,data) => {

 for (let i = 0; i <data.length; i++) {

       let viewCoordinates = data[i].location;
          // console.log(Coordinates)


       let provinceName = data[i].name;



       createFile(provinceName, viewCoordinates);


 }

   // let viewArrays = data[0].location;





});



let createFile = function(provinceName, results) {

      let newFileName = provinceName.replace(/\s/g, '-').toLowerCase();

      let file = `centerCoordinates/${newFileName}.json`
      jsonfile.writeFile(file, results, function (err) {
        // console.error(err)
        console.log(`created ${newFileName} file`);

      })
 }