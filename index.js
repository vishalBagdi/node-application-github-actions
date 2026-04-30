import express from 'express'
const app = express()
const PORT = process.env.PORT ?? 8080

app.get('/', (req, res) =>{
    return res.json({msg: 'hello from the server open the port v1 wellcome to vishal pod using github actions via ec2 '})

})

app.listen(PORT, () =>{
    console.log('Server is up and running on PORT')
})