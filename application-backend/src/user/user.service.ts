import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import AbstractController, { ApiResponse } from 'src/abstract.controller';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService extends AbstractController {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    super();
  }

  async addUser(user: User) {
    return this.userRepository.save(user);
  }

  findOne(id: number) {
    return this.userRepository.findOne({
      where: { id },
    });
  }

  async setEligibleForLoan(user: User, eligible: boolean): Promise<User> {
    user.eligibleForLoan = eligible;
    return this.userRepository.save(user);
  }
}
