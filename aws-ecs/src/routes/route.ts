import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hello from Docker",
  });
});
router.get("/health", (req, res) => {
  res.status(200).json({
    message: "Health Check OK",
  });
});
export default router;
