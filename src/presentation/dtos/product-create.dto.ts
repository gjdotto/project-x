
import { IsNotEmpty, IsString, IsBoolean, IsNumber } from "class-validator";

export namespace CreateProductDto {


    export class Body {

        @IsString()
        @IsNotEmpty()
        name: string;

        @IsNumber()
        @IsNotEmpty()
        price: string;

        @IsString()
        @IsNotEmpty()
        createdAt: string;

        @IsBoolean()
        @IsNotEmpty()
        activated: string;

    }

}
