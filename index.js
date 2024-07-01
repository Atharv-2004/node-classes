// const fs= require('fs');
// const path = require('path');
// const data = fs.readFileSync('file.txt');

// console.log(""+data);

// // fs.appendFile('file.txt',"Hello World!",'utf-8',(err) =>
// // {
// //     console.log("File is written successfully");
// // })

// // fs.writeFile('file.txt',"class is going on!",'utf-8',(err) =>
// // {
// //     console.log("File is written successfully");
// // })
// fs.mkdir('dir1', (err)=>
// {
//     if(err){
//         console.log(err);
//     }
//     console.log("Directory is created successfully");
// })

// // fs.rmdir('dir1',(err)=>
// // {
// //     if(err){
// //         console.log(err);
// //     }
// //     console.log("Directory is deleted successfully");
// // })

// // fs.rename('file1.txt', 'file.txt', (err) => {
// //     if (err) {
// //         console.error('Error renaming file:', err);
// //     } else {
// //         console.log('File is renamed successfully');
// //     }
// // });


// // const p="/Users/ATHARV SANJAY JAIN/pseudo_node/file.txt";
// // const path = require("path");

// // const dirname = path.dirname(p);

// // const extension = path.extname(p);
// // console.log(dirname);
// // console.log(extension);

// const filePath = path.join(__dirname, 'file.txt');
// const newDir = path.join(__dirname, 'dir1');
// const newFilePath = path.join(newDir, 'file.txt');

// // Create the new directory if it doesn't exist
// if (!fs.existsSync(newDir)) {
//     fs.mkdirSync(newDir);
// }

// // Copy the file to the new directory
// fs.copyFile(filePath, newFilePath, (err) => {
//     if (err) {
//         return console.error('Error copying file:', err);
//     }
//     console.log('File copied successfully');

//     // // Delete the original file
//     // fs.unlink(filePath, (err) => {
//     //     if (err) {
//     //         return console.error('Error deleting original file:', err);
//     //     }
//     //     console.log('Original file deleted successfully');
//     // });
// });
const http = require('http');


const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/login') {
        res.write('<html lang="en"><head><title>NodeJS Class</title></head>');
        res.write('<body><h1>Hello, login</h1></body></html>');
    } else {
        res.write('<html lang="en"><head><title>NodeJS Class</title></head>');
        res.write('<body><h1>Hello, World</h1></body></html>');
    }

    res.end();
});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
