import { IsString } from 'class-validator';

export class CreateStoryDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsString()
  authorId: string;
}
