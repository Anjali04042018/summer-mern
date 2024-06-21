// const http = require('http');

// const app = http.createServer((req,res) =>{
//     // res.setHeader('content-Type','text/html')
//     // res.write("<html><body> <h1>Welcome</h1></body></html>");
//     // res.end();
//     res.writeHead(200,{
//         'content-Type':'text/html'

//     });
//     res.end(`
//         <html lang="en">
//         <head>
       
//         </head>
//         <body>
//             <h1> Welcome </h1>
//         </body>
//         </html>
//     `)
// });


// app.listen(2000);





const http = require('http');
const fsPromises = require('fs/promises')

const app = http.createServer(async (req,res) =>{
    // console.log(Object.keys(req));
    console.log(req.url)
    res.writeHead(200,{ 'content-type': 'text/html'});
    const route = req.url;
    switch(route){
        case "/":{
            const stream = await fsPromises.readFile('./pages/homepage.html');
            res.end(stream);
            break;
        };
        case '/products':{
            res.end('This is products page');
            break;
        };
        default:{
            res.end("page not found");
          
        }
    }
   
})

app.listen(3000)