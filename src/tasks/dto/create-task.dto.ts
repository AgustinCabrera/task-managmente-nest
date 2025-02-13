import { isString, IsString, min, minLength, MinLength } from 'class-validator';
export class CreateTaskDto {
  @MinLength(1)
  title: string;
  @isString()
  @minLength(1)
  description: string;
}
