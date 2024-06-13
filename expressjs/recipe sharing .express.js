const express=require ('express');
const app=express();
//Define a simpleendpoint
app.get('/helo',(req,res) => {
    res.send('Hello,world');
});
const port=3000;
app.listen(port,() => {
    console.log(`server is running on http://localhost
    ${port}`);
});