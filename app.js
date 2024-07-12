import express from "express";

const app = express();

// Configuration ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'EJS Template Engine',
        message: 'Hello from EJS!',
        members: ["Alamin", "Ruhul Amin", "Rana", "Tipu", "Sabbir", "Nayem", "Sharabon", "Rifat", "Raisan"],
    });
});

app.listen(8000, () => console.log('Server started'));