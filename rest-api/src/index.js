import express from 'express';
import { categotiesRouter, productsRouter } from './routes/index.js';
const app = express();
const port = 4000;
app.use(express.json());

app.use("/api", categotiesRouter);
app.use("/api/", productsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});