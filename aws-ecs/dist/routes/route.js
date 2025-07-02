"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
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
exports.default = router;
