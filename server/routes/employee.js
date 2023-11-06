import express from "express";
import { upload, getDetails } from "../controllers/employee.js";

const router = express.Router();

router.post("/data", upload);
router.get("/details", getDetails);

export default router;
