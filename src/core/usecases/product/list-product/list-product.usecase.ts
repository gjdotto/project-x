
import { injectable, inject } from 'inversify'
import { ListProductInterface } from "./list-product.interface";

import { ProductRepositoryInterface} from '../../../providers/data/product-repository.interface'
import TYPES from '../../../../types';
import { ProductEntity } from 'core/entity/product.entity';


@injectable()
export class ListProductUseCase implements ListProductInterface {
    private _productRepository: ProductRepositoryInterface;

    constructor(
        @inject(TYPES.ProductRepositoryInterface)
        productRepository: ProductRepositoryInterface
    ) {
        this._productRepository = productRepository
    }

    async execute(filter: any): Promise<ProductEntity[]> {

        const filterData = {};

        //validar se filtro recebido se sim criar atributo no filterToMongo

        const resultFromDB = await this._productRepository.search(filterData);

        return resultFromDB;

    }
}