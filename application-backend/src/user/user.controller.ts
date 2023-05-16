import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import AbstractController from 'src/abstract.controller';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController extends AbstractController {
  constructor(private readonly userService: UserService) {
    super();
  }

  @Post()
  async create(@Body() user: User) {
    try {
      const newUser = await this.userService.addUser(user);
      return this.successResponse(newUser, 'User added successfully');
    } catch (error) {
      return this.internalErrorResponse(null, 'Failed to add user');
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const userId = parseInt(id);

    if (!userId) return this.internalErrorResponse();

    const user = await this.userService.findOne(userId);

    if (user) return this.successResponse(user);

    return this.notFoundResponse();
  }

  @Post(':id/loanEligibility')
  async setEligibleForLoan(@Param('id') id: string, @Body() eligible: boolean) {
    const userId = parseInt(id);

    if (!userId) return this.internalErrorResponse();

    const user = await this.userService.findOne(userId);

    if (user) return this.userService.setEligibleForLoan(user, eligible);

    return this.notFoundResponse();
  }
}
