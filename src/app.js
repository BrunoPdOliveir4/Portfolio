const express = require('express');

const app = express();

app.get('/', (req,res) =>{
    res.send("Perfect, ma boy!")
})

app.listen(3001, (err)=>{    
        if(!err)console.log('worked!')
    }
)