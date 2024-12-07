import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3001;


app.get('/', (req, res) => {
    res.send('Welcome to my Server');
});


app.get('/html', (req, res) => {
    const filePath = path.join('./index.html');
    res.sendFile(filePath, { root: '.' }, (err) => {
        if (err) {
            res.status(500).send('Error reading HTML file.');
        }
    });
});


app.get('/image', (req, res) => {
    const imgPath = path.join('./image.jpg');
    res.sendFile(imgPath, { root: '.' }, (err) => {
        if (err) {
            res.status(500).send('Error reading image file.');
        }
    });
});

app.get('/audio', (req, res) => {
    const audioPath = path.join('./audio.mp3');
    res.sendFile(audioPath, { root: '.' }, (err) => {
        if (err) {
            res.status(500).send('Error reading audio file.');
        }
    });
});


app.get('/video', (req, res) => {
    const videoPath = path.join('./video.mp4');
    res.sendFile(videoPath, { root: '.' }, (err) => {
        if (err) {
            res.status(500).send('Error reading video file.');
        }
    });
});

app.get('/pdf', (req, res) => {
    const pdfPath = path.join('./document.pdf');
    res.sendFile(pdfPath, { root: '.' }, (err) => {
        if (err) {
            res.status(500).send('Error reading PDF file.');
        }
    });
});


app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
