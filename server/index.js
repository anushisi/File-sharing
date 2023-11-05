import express from 'express';
import router from './routers/routes.js';
import cors from 'cors';
import DBConnection from './database/db.js';
import path from 'path';

const __dirname = path.resolve();



const app = express();
app.use(cors());
app.use('/',router);

app.use(express.static(path.join(__dirname,"./client/build")));
app.get('*',function(_,res){
  res.sendFile(path.join(__dirname,"./client/index.html"),function(error){
    res.status(500).send(error);
  });
})

const PORT = process.env.PORT || 8000;

DBConnection();
app.listen(PORT,() => console.log(`server is running on PORT ${PORT}`));

