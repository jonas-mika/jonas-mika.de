// simple express server to read public folder at runtime 
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const http = require('http');

const app = express();
const public = path.join(__dirname, 'client', 'public')
app.use(express.static(public));
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ "message": "Hello From Express" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));


// general 
fs.readdir(`${public}/content`, { withFileTypes : true}, (err, files) => {
    if (err)
        console.log(err);
    else {
        const dirs =  files
            .filter(file => file.isDirectory())
            .map(dir => dir.name);

        app.get('/api/courses', function(req, res) {
            res.json(dirs);
        });

        dirs.forEach(dir => {
            fs.readdir(`${public}/content/${dir}`, (err, files) => {
                if (err) 
                    console.log(err);
                else {
                    app.get(`/api/courses/${dir}`, function(req, res) {
                        res.json(files);
                    });

                    /*
                    files.forEach(file => {
                        const filename = `${__dirname}/content/${dir}/${file}`
                        const route = `${__dirname}/courses/${dir}/${file}`

                        /*
                        app.get(route, function(req, res){
                            const f = filename;
                            res.download(f); // Set disposition and send it.
                        });
                    })
                    */
                }
            })
        })
    }
})

fs.readdir(`${public}/share`, (err, files) => {
    if (err)
        console.log(err);
    else {
        // all downloads available
        app.get('/api/share', function(req, res) {
            res.json(files);
        });
  
        // individual download routes
        let shareData = {}
        files.forEach(file => {
            app.get(`/api/share/${file}`, function(req, res){
                const f = `${public}/share/${file}`;
                res.download(f); // Set disposition and send it.
            });
        })
    }
})
