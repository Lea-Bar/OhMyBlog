import express, { Application } from "express";
import path from "path";

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
        this._app.listen(port)
    }
    
}

export default new App();