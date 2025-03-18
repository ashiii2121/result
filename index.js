const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/madras')
.then(()=>{
    console.log('Db is connected');
    
})

.catch((err)=>
{
    console.log('Db is not connected');

    
})

app.get('/',(req,res)=>
[
    

    
])

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
