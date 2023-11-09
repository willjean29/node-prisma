import { Router } from 'express';
import { prisma } from '../db.js';
const router = Router();


router.get("/products", async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products)
})

router.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await prisma.product.findUnique({
    where: {
      id: Number(id)
    },
    include: {
      category: true
    }
  });
  if (!product) return res.status(404).json({ error: "Product not found" })
  res.json(product)
})

router.post("/products", async (req, res) => {
  try {
    const product = await prisma.product.create({
      data: req.body
    })
    res.json(product)
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error })
  }
})

router.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await prisma.product.delete({
    where: {
      id: Number(id)
    }
  });
  if (!product) return res.status(404).json({ error: "Product not found" })
  res.json(product);
})

router.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await prisma.product.update({
    where: {
      id: Number(id)
    },
    data: req.body
  });
  if (!product) return res.status(404).json({ error: "Product not found" })
  res.json(product);
})

export const productsRouter = router;