//console.log("It's Working ");

//console.log('It\'s Working ');


console.log('It\'s Working ');


const express = require('express')
const app = express()

require('dotenv').config();

 

// app.get('/', function (req, res) {
//   res.send('Hello World');
// })

// app.post('/employee', function (req, res) {
//     res.json({
//         'msg': 'Hello Calling to Post Successfully...',
//         'ReplyCode': "SUCCESS"

//     });
// })


let PORT= process.env.PORT;

app.use((req, res, next)=>{

    //How you can chack the request type?
    //object.property
    console.log(typeof(req.method));

            if(req.method === 'GET'){
              console.log("Hi, Welcome to GET");

              res.json({
                'msg': "GET Request is not allowed !",
                'ReplyCode': "RUN-Time ERROR"

              })
            }
            else{
                //PUT/POST/DELETE
                    app.post('/employee', function (req, res) {
                        res.json({
                            'msg': 'Hello Calling to Post Successfully...',
                            'ReplyCode': "SUCCESS"

                        });
                    })
                next();
            }
})

app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}`);
})

