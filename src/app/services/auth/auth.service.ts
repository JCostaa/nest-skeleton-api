import {BcryptService} from "./bcrypt.service";
import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {UserService} from "../user.service";
import {User} from "../../../domain/model/user.entity";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly bcryptService: BcryptService,
    private readonly jwtService: JwtService
  ) {
  }

  async login(email: string, password: string): Promise<any> {
    console.log(email, password);
    let user: User = await this.userService.findOne({where: {email: email}});
    if (user && await this.bcryptService.compare(password.toString(), user.password)) {
        const token = this.jwtService.sign({username: user.name, sub: user.id})
       return user;
    }
    throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
  }

}
