import { Router } from 'express';
import { prisma } from '../db.js';

const router = Router();

router.get("/categories", async (req, res) => {
  const categories = await prisma.category.findMany();
  res.json(categories)
})

router.post("/categories", async (req, res) => {
  try {
    const category = await prisma.category.create({
      data: req.body
    })
    res.json(category)
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error })
  }
})

export const categotiesRouter = router;