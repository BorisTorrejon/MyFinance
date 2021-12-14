const { Router } = require('express');
const router = Router();

router.get('/',(req,res)=>{
    res.render('index');
})

//Routes
//app.use('/api/abm',require('./routes/transaction.router'));

module.exports = router;