import express from "express";
import dotenv from "dotenv";
import pg from "pg";
import cors from "cors";



dotenv.config();

const app = express();
const { Client } = pg;
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/api/items", async (req, res) => {
    const client = new Client(process.env.DATABASE_URL);
    client.connect();
    const { rows } = await client.query("SELECT * FROM items");
    console.log(rows);
    res.send(rows);
    client.end();
});

app.get("/api/items/:name", async (req, res, next) => {
    let name = req.params.name;
    if(!name){
        next({
            status: 404,
            message: "Item not found"
        })
    }
    const client = new Client(process.env.DATABASE_URL);
    client.connect();
    const { rows } = await client.query("SELECT * FROM items WHERE name = $1", [name]);
    if (rows.length == 0) {
        next({
            status: 404,
            message: 'Item Not Found',
        });
    }
    console.log(rows);
    res.send(rows);
    client.end();
});


app.post("/api/items", async (req, res) => {
    const text = "INSERT INTO items(name, style, price) VALUES($1, $2, $3) RETURNING *";
    let name = req.body.name;
    let style = req.body.style;
    let price = req.body.price;
    console.log(req)
    const values = [name, style, price];
    console.log(values)
    try {
        const client = new Client(process.env.DATABASE_URL);
        client.connect();
        const { rows } = await client.query(text, values);
        console.log(rows);
        res.send(rows);
        client.end();
        
    } catch (error) {
        console.log(error)
        res.status(400).json([{
            message:error
        }])
    }
});

app.delete("/api/items/:id", async (req, res) => {
    let id = req.params.id;
    const client = new Client(process.env.DATABASE_URL);
    client.connect();
    const { rows } = await client.query("DELETE FROM items WHERE id =$1 RETURNING *", [id]);
    console.log(rows);
    res.send(rows);
    client.end();
});

app.use((req, res, next) => {
    next({
        status: 404,
        message: 'Not Found'
    });
});

app.use((err, req, res, next) => {
    // console.log(err);
    res.status(err.status).send(err.message);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});