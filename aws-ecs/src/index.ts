import  express from "express";
import router from "./routes/route";
// import something from "./routes/sssdv ";
const PORT = process.env.PORT || 4000;
const app=express();

app.use("/",router)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} `);
}); 