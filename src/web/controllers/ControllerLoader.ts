import { Application } from "express";
import { HomeRouter } from "./home/HomeController";

export default function loadControllers(app : Application){
    app.use("/", HomeRouter)
}