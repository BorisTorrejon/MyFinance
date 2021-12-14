const express      = require('express');
const morgan       = require('morgan');
const path         = require('path');
const cors         = require('cors');
//const {connection} = require('./libs/connectionDB');
const config = require('./config/config.json');
const app = express();

//Setting
app.set('port',process.env.port||config.PORT);
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

//Middelware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//REST
app.use('/api/abm',require('./routes/transaction.router'));

//Views
app.use(require('./routes/index'));


//Starting the Server
app.listen(app.get('port'),()=>{
    console.log('Server on port ',app.get('port'));
});