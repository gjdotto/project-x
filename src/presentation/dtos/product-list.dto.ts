import { IsString, IsNotEmpty } from "class-validator";

export namespace ListProductDto {
    export class Query {
        @IsString()
        @IsNotEmpty()
        name: string
        
    }
}