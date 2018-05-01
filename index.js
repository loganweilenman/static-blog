const express = require('express');
const path = require('path');
const { exec } = require('child_process');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/dist')));

// Put all API endpoints under '/api'
app.get('/api/test', (req, res) => {
  res.json([{}]);
});

app.post('/webhooks/contentful', (req, res)=>{
    console.log("/webhooks/contentful");
    
    var build = exec('sh build.sh', function(error, stdout, stderr){
        if(error){
            console.log("ERROR:", error);
        }

        console.log("SITE UPDATED!");
        // this.kill();
    });

    res.status(200).end('Success');
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/dist/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Listening on ${port}`);