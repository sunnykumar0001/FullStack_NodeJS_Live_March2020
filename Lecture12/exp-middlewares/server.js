const express = require('express')
const lib = require('./lib')

const app = express()

app.use('/', express.static(__dirname + '/public'))

function decryptQueryParams(req, res ,next) {

    // TODO: decrypt all query params as per our logic
    req.query.code = lib.flipCase(req.query.code)
    // console.log(req.query.code);
    next()
}

function decodeQueryBase64(req, res, next) {
    for (let q in req.query) {
        let data = req.query[q] 
        data = new Buffer(data, 'base64').toString('ascii')
        req.query[q] = data
    }
    next()
}

app.get('/eval', decryptQueryParams, decodeQueryBase64, (req, res) => {
    // console.log(req.query)

    // TODO: eval the code actually // DONE
    let ans = eval(req.query.code);
    // console.log(ans);
    res.write('=========== Eval Result =========')
    res.write('\nEvaluation : ' + ans)
    res.send()
})

app.listen(4545, () => {
    console.log('server started on http://localhost:4545')
})