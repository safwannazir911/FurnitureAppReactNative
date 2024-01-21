import { Router } from "express";
import productController from "../controllers/productControlers.js";

const router = Router();

router.post('/', productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProduct);
router.get('/search/:key', productController.searchProduct);

export default router;