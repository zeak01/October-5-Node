const express = require('express')
const app = express()



app.get('/', (req, res) => {
    // res.send('You are welcome to our home page')
    res.sendFile('./seunsite/home.html', { root: __dirname })
})

app.get('/about', (req, res) => {
    res.send('<h2>You are welcome to our about page</h2><p>This is the about page content.</p>')
    res.sendFile('./seunsite/about.html', { root: __dirname })
})

app.get('/contact-us', (req, res) => {
    res.send('<h2>You are welcome to our contact page</h2><p>This is the contact page content.</p>')
    res.sendFile('./seunsite/contact-us.html', { root: __dirname })
})


app.get('/content', (req, res) => {
    res.send('<h2>You are welcome to our content page</h2><p>This is the content page content.</p>')
    res.sendFile('./seunsite/content.html', { root: __dirname })
})


app.listen(3000, () => {
    console.log('Server is running smoothly on http://localhost:3000')
})