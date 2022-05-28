import {Body, Controller, Get, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {AuthService} from "../../../../app/services/auth/auth.service";

@ApiTags('Auth')
@Controller('api/v1/auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @UsePipes(ValidationPipe)
  @Post('login')
  login(@Body() payload:any): Promise<any>{
    return this.authService.login(payload.email,payload.password)
  }
}
