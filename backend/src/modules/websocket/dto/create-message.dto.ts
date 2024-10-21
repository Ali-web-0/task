import { IsString, IsOptional } from 'class-validator';

export class CreateMessageDto {
    @IsString()
    readonly content: string;

    @IsOptional()
    readonly type?: string;
}
