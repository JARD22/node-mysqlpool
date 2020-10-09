const pool = require('../mysql/mysql');

const getUsuarios=(req,res)=>{


    try {
    
        
        pool.query('SELECT * FROM  myguests', (error, results, fields)=> {
            if (error){
                return res.status(500).json({
                    ok: false,
                    msg: error
                });
            };

            return res.status(200).json({
                ok:true,
                results
            }) });


    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg: error
        });
    }
}

module.exports={
    getUsuarios
}