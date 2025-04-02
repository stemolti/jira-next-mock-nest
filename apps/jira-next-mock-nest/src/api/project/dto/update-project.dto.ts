import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateProjectDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsString()
    @IsOptional()
    description?: string;
  
    @IsInt()
    @IsOptional()
    updatedAt?: Date;
}