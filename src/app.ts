import "reflect-metadata";

import * as express from 'express';

import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";

import TYPES from "./types";

import { ListProductInterface } from "./core/usecases/product/list-product/list-product.interface";
import { ListProductUseCase } from "./core/usecases/product/list-product/list-product.usecase";

// import './presentation/controllers/app.controller'
import './presentation/controllers/product.controller'

import { ProductRepositoryInterface } from "./core/providers/data/product-repository.interface";
import { ProductRepository } from "./infra/data/product.repository";

const PORT = process.env.PORT || 3005;

const container = new Container()

export class App {
    constructor() {
        this.configDependencies();
        this.createService();
    }

    configDependencies(): void {
        container.bind<ListProductInterface>(TYPES.ListProductInterface).to(ListProductUseCase),
        container.bind<ProductRepositoryInterface>(TYPES.ProductRepositoryInterface).to(ProductRepository)
    }

    createService(): void {
        const server: InversifyExpressServer = new InversifyExpressServer(container)
    
        server.setConfig((app) => {
            app.use(express.json())
        });

        server.setErrorConfig((app) => {
            app.use((err, req, res, next) => {
                console.log(err)
                if(err) {

                    if (err.name == 'BusinessError') {
                        return res.status(400).json({
                            message: err.message,
                        });
                    }

                    return res.status(500).json({
                        message: "Internal Server Error",
                    });
                }

                next();
            })
        })

        
        const app = server.build();

        app.listen(PORT, () => {
            console.log(`server listen port ${PORT}`)
        })

    }
}

export default new App();