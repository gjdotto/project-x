import "reflect-metadata";
import { inject, injectable } from "inversify";
import TYPES from "../../../../types";

import { ProductRepositoryInterface } from "core/providers/data/product-repository.interface";
import { CreateProductInterface, CreateProductUseCaseParams } from "./create-product.interface";
import { ProductEntity } from "core/entity/product.entity";

@injectable()
export class CriaCursoUseCase implements CreateProductInterface {
    
    private _productRepository: ProductRepositoryInterface;

    constructor(
        @inject(TYPES.ProductRepositoryInterface) productRepository: ProductRepositoryInterface 
    ) {
        // super();
        this._productRepository = productRepository;

    }

    execute(model: CreateProductUseCaseParams): ProductEntity {

        const productFromDb = this._productRepository.search({
            name: model.name
        });
        
        if (!productFromDb)
            throw new Error("");
            
                
        const result = this._productRepository.create({
            name: model.name,
            price: model.price,
            activated: model.activate,
            createdAt: model.createdAt
        });


        return result;

    }

}