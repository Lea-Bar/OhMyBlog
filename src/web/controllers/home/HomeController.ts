import { Router } from "express";

export const HomeRouter = Router();

HomeRouter.all("/", (req,res) => {
    res.render("home")
})