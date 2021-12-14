const { Router } = require('express');
const router = Router();
const connection = require('../libs/connectionDB');

router.get('/', async(req, res)=>{
    const sql = `SELECT * FROM transactions`;
    connection.query(sql,(error, result)=>{
        if(error) throw error;
        if(result.length > 0)
            res.json(result);
        else
            res.json({status:"Not results"});
    });
});

router.get('/:id', async(req, res)=>{
    const {id}= req.params;
    const sql = `SELECT * FROM transactions WHERE transactionID=${id}`;
    connection.query(sql,(error, result)=>{
        if(error) throw error;
        if(result.length > 0)
            res.json(result);
        else
            res.json({status:"Not results"});
    });
});

router.post('/', async(req,res)=>{
    const sql = `INSERT INTO transactions SET ?`;
    const transaction = {
        transactionConcept: req.body.concept,
        transactionAmount : req.body.amount,
        transactionDate   : req.body.date,
        transactionType   : req.body.type
    };
    connection.query(sql,transaction,error=>{
        if(error) throw error;
        res.json({status:"your transaction was saved"});
    });
});

router.put('/:id', async(req,res)=>{
    const {id}= req.params;
    const sql = `UPDATE transactions SET ? WHERE transactionID=${id}`;
    const transaction = {
        transactionConcept: req.body.concept,
        transactionAmount : req.body.amount,
        transactionDate   : req.body.date
    }
    connection.query(sql,transaction,error=>{
        if(error) throw error;
        res.json({status:"you transaction was updated"});
    });
});

router.delete('/:id', async(req,res)=>{
    const {id}= req.params;
    const sql = `DELETE FROM transactions WHERE transactionID=${id}`;
    connection.query(sql,error=>{
        if(error) throw error;
        res.json({status:"your transaction was deleted"});
    });
});

module.exports = router;