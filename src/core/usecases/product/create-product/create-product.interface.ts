import { ProductEntity } from "../../../../core/entity/product.entity";


export class CreateProductUseCaseParams {
    name: string;
    price: string;
    activated: string;
    createdAt: string;
}



export interface CreateProductInterface {
    
    execute(model: CreateProductUseCaseParams): ProductEntity;

}