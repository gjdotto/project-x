import { ProductRepositoryInterface, ProductRespositoryCreateParams, ProductRespositorySearchParams } from "../../core/providers/data/product-repository.interface";
import { injectable } from "inversify";
import { ProductEntity } from "../../core/entity/product.entity";

const data: ProductEntity[] = [];

@injectable()
export class ProductRepository implements ProductRepositoryInterface {



    create(model: ProductRespositoryCreateParams): ProductEntity {

        //todo: construir o id
        const id = 0;

        //todo: construir data model 
        const dataModel = {
            id,
            name: model.name,
            price: model.price,
            activated: model.activated,
            createdAt: model.createdAt
        }


        //todo: persistir na base de dados
        data.push(dataModel);

        return ProductEntity.build(
          dataModel.id,
          dataModel.name,
          dataModel.price,
          dataModel.activated,
          dataModel.createdAt
        );
    }

    search(model: ProductRespositorySearchParams): ProductEntity[] {
        throw new Error("Method not implemented.");
    } 

    findById(): ProductEntity {
        return data[0]
    }

}