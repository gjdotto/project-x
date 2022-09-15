import { ProductEntity } from "../../../entity/product.entity";

export interface ListProductInterface {
    execute(filter: any): Promise<ProductEntity[]>
}