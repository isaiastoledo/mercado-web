import express from 'express';
import exphbs from 'express-handlebars';
import path, { extname } from "path"

const app = express();
const PORT = 3000;

const __direname= path.resolve()

app.use(express.static("assets"))
app.use("/bootstrap" , express.static("node_modules/bootstrap/dist/css"))

app.set("view engine", "hbs")
app.engine('hbs', exphbs.engine({
    layouysDir: __direname + "/views",
    extname: '.hbs'
}))

app.get('/', (req, res) =>{
    res.render('home', {
        productos: ["banana", "cebollas", "lechuga", "papas", "pimenton", "tomate"],
    });
});

app.listen(PORT, () =>
console.log(`servicor iniciado en el puerto http://localhost:${PORT}`)
);