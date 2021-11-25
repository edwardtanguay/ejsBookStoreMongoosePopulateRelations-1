import express from "express";
import path from "path";

const app = express();
const __dirname = path.resolve(path.dirname(""));
const port = 3047;
const staticDirectory = path.join(__dirname, "./public");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));
app.use(express.static(staticDirectory));

app.get('/', async (req, res) => {
    // res.send('testing');
    res.render('index',{
        pageTitle: "Tech Bookstore"
    });
});


app.listen(port, () => {
  console.log(`Now listening on port http://localhost:${port}`);
});
