import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import productRouter from './routes/productRouter.js';
import cors from "cors"
const app = express();
const port = 3000;

dotenv.config();

app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json({ limit: "10mb" }))
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected"))
  .catch(err => console.log(err));


// Use CORS middleware to allow requests from a specific origin (port 3000)
app.use(cors());


// Use the productRouter for paths starting with /products
app.use('/api/products/', productRouter);

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
