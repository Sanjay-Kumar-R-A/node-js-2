import express from "express";
import { createProduct, getProductById, getProducts } from "../Controllers/productControllers.js";

const router = express.Router();

router.get("/getdata",getProducts);
router.get("/getdata/:id",getProductById);
router.post("/create",createProduct);

export default router;