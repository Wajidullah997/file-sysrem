const path = require('path');
const fs = require('fs');
fs.mkdir(path.join(__dirname, '/test'), (err) => {
    if (err) {
        console.log(err)
    return
    }
    console.log('folder is creat')
})
fs.writeFile(path.join(__dirname, '/test','test.txt'),'hello node', (err) => {
    if (err) {
        // console.log(err)
    throw err
    }
    console.log('file is  created is creat')

fs.appendFile(path.join(__dirname, '/test','test.txt'),'more data', (err) => {
    if (err) {
        
        throw err
    }
        console.log('data added')
    })
    console.log('file is  created is creat')
})

fs.readFile(path.join(__dirname, 'test', 'test.txt'),(err,data) => {
    if (err) {
        
        throw err
    }
    const content=Buffer.from(data)
    console.log(content.toString())
})
// https://fb.watch/kAun_fvNFZ/
// // imran about madrassa
const os = require('os')
const { uptime } = require('process')

console.log(os.uptime())
const http = require('http')
const path = require('path');
const fs = require('fs');
const app = http.createServer((req, res) => {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
        if (err) {
            throw err
        }
        res.end(content)
    });
   
    
})
    const port = process.env.port||3000;

    app.listen(port,() => {
        console.log(`listen to port 3000 ${port}`)
    })


const http = require('http')
const path = require('path');
const fs = require('fs');
const app = http.createServer((req, res) => {
    res.writeHead(200, {
        'content-Type': 'text/html'
    })
   console.log(req.url)
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) {
                throw err
            }
        res.end(content)
    });
    } else if(url.req === '/about'){
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) {
                throw err
            }
        res.end(content)
    });
    
   }
  
    });
    const port = process.env.port||5000;

app.listen(port, () => {
    console.log(`listen to port 3000 ${port}`)
});
    
   


const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('hi i am wajid ullah')
})
app.listen(3000, () => {
    console.log(' hello world')
});