import express, { Application } from "express";

class App {
    private readonly _app : Application;

    constructor(){
        this._app = express();
    }

    public get getApp() : Application{
        return this._app;
    }
    
}

export default new App();