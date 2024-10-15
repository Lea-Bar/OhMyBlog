import express, { Application } from "express";
import path from "path";
import loadControllers from "./controllers/ControllerLoader";

class App {
    private readonly _app : Application;

    constructor(){
        this._app = express();
    }

    public get getApp() : Application{
        return this._app;
    }

    public load(port : number){
        this._app.use(express.static(path.resolve(__dirname, "public")))
        this._app.set("view engine", "ejs")
        this._app.set('views',path.resolve(__dirname, "views"))
        loadControllers(this._app)
        this._app.listen(port)
    }
    
}

export default new App();