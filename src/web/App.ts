import express, { Application } from "express";

class App {
    private readonly _app : Application;

    constructor(){
        this._app = express();
    }

    public get getApp() : Application{
        return this._app;
    }

    public load(port : number){
        this._app.use(express.static("./public"))
        this._app.set("view engine", "ejs")
        this._app.listen(port)
    }
    
}

export default new App();