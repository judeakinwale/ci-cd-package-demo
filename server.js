const app = require('./routes')

port = 5000
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})