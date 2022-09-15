import { inject } from 'inversify'
import { httpGet, BaseHttpController, interfaces, controller, queryParam, requestParam, httpPost, requestBody, httpPut } from "inversify-express-utils";

import { ListProductInterface } from "../../core/usecases/product/list-product/list-product.interface";
import TYPES from '../../types';

import { ListProductDto } from '../../presentation/dtos/product-list.dto';
import { CreateProductInterface } from '../../core/usecases/product/create-product/create-product.interface';
import { ValidateDtoMiddleware } from '../../presentation/middlewares/validate-dto.middleware';
import { CreateProductDto } from '../../presentation/dtos/product-create.dto';

@controller('/products')
export class ProductController extends BaseHttpController implements interfaces.Controller {
    private _listProductService: ListProductInterface;
    private _createProductService: CreateProductInterface;

    constructor(
        @inject(TYPES.ListProductInterface) listProductUseCase: ListProductInterface
    ) {
        super()
        this._listProductService = listProductUseCase
    }

    @httpGet('/')
    public async list(
        @queryParam() query: ListProductDto.Query,

    ): Promise<interfaces.IHttpActionResult> {

        const result: any[] = this._listProductService.execute({})

        return this.json(result)
    }

    @httpPost(
        "/", 
        ValidateDtoMiddleware(CreateProductDto.Body, "body"),
    )
    public async create(
        @requestBody() body: CreateProductDto.Body,
    ): Promise<interfaces.IHttpActionResult> {

        const result = this._createProductService.execute({
            name: body.name,
            price: body.price,
            activated: body.activated,
            createdAt: body.createdAt
        });

        //todo: montar saida conforme definicao no dto do presentation
        return this.json(result);
    
    }
}