import express from "express";
import {
  createListing,
  deleteListing,
  updateListing,
  getListing,
  getListings,
} from "../controllers/listing.controller.js";
import { verifiedToken } from "../utils/verifiedUser.js";

const router = express.Router();

router.post("/create", verifiedToken, createListing);
router.delete("/delete/:id", verifiedToken, deleteListing);
router.post("/update/:id", verifiedToken, updateListing);
router.get("/get/:id", getListing);
router.get("/get", getListings);

export default router;
