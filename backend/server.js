import dotenv from 'dotenv';
dotenv.config({ quiet: true });
import http from 'http';
import app from './app.js';
import connect from './db/db.js';



const port = process.env.PORT || 3000;


const server = http.createServer(app);



connect().then(() => {
    server.listen(port, (error) => {
        if (error) {
            console.log("error while starting the server");
            console.log(error);
        } else {
            console.log(`Server is runnning on port ${port}`);
        }
    })
})
    .catch((err) => {
        console.log("Error while connecting to DB");
        console.log(err);
    })

