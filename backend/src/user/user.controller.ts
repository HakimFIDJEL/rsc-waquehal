import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtGuard)
  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  async getUserProfile(@Param('id') id: number) {
    return await this.userService.findById(id);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.userService.delete(id);
  }

  @UseGuards(JwtGuard)
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(+id, updateUserDto);
  }

  @UseGuards(JwtGuard)
  @Patch('password/:id')
  async updatePassword(@Param('id') id: string, @Body() passwordData: { currentPassword: string, newPassword: string, confirmPassword: string }) 
  {
    return await this.userService.updatePassword(
      +id,
      passwordData.currentPassword,
      passwordData.newPassword,
      passwordData.confirmPassword
    );
  }

  @Get('password/reset/:token')
  async checkToken(@Param('token') token: string) {
    return await this.userService.checkToken(token);
  }

  @Post('password/reset/:token')
  async resetPassword(@Param('token') token: string, @Body() passwordData: { newPassword: string, confirmPassword: string }) {
    return await this.userService.resetPassword(token, passwordData.newPassword, passwordData.confirmPassword);
  }


}
