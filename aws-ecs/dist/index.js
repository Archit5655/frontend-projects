"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./routes/route"));
const PORT = process.env.PORT || 4000;
const app = (0, express_1.default)();
app.use("/", route_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} `);
});
