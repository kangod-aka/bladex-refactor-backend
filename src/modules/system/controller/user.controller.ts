import { Controller, Body, Param, Query, Get, Post, Put, Delete, ValidationPipe } from '@nestjs/common';
import { UserService } from '../service';
import {CreateUserDto, QueryUserDto, UpdateUserDto} from "../dto";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body(
          new ValidationPipe({
            transform: true,
            forbidUnknownValues: true,
            validationError: { target: false },
            groups: ['create'],
          }),
      ) createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number,
         @Body(new ValidationPipe({
              transform: true,
              forbidUnknownValues: true,
              validationError: { target: false },
              groups: ['update'],
          }),
      ) updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.remove(id);
  }

  @Get("pageQuery")
  async pageQuery(@Query(
        new ValidationPipe({
          transform: true,
          forbidUnknownValues: true,
          validationError: { target: false },
        }),
    ) queryUserDto: QueryUserDto) {
    return await this.userService.pageQuery(queryUserDto);
  }
}
