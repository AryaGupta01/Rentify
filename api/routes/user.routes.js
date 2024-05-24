import express from "express";
import {
  test,
  updateUser,
  deleteUser,
  getUserListing,
  getUser,
} from "../controllers/user.controller.js";
import { verifiedToken } from "../utils/verifiedUser.js";

const router = express.Router();

router.get("/test", test);
router.post("/update/:id", verifiedToken, updateUser);
router.delete("/delete/:id", verifiedToken, deleteUser);
router.get("/listings/:id", verifiedToken, getUserListing);
router.get("/:id", verifiedToken, getUser);

export default router;
