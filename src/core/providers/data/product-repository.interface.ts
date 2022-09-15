

import { ProductEntity } from "../../entity/Product.entity";


export type ProductRespositorySearchParams = {
    name?: string;    
}


export type ProductRespositoryCreateParams = {
    productId: string,
    name: string,
    price: number,
    activated: boolean,
    createdAt: string   
}

export interface ProductRepositoryInterface {
    
    search(model: ProductRespositorySearchParams): ProductEntity[];
    
    findById(id: string): ProductEntity;

    create(model: ProductRespositoryCreateParams): ProductEntity;

}
