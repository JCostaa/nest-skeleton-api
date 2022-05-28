import {Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {ConfigService} from "@nestjs/config";
import {Token} from "../../../domain/model/token.entity";

@Injectable()
export class JwtTokenService {
  protected secret: string;
  protected expiresIn: number;
  protected refreshExpiresIn: number;

  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService) {
    this.secret = this.configService.get<string>('auth.jwt.secret');
    this.expiresIn = this.configService.get<number>('auth.jwt.expiresIn');
    this.refreshExpiresIn = this.configService.get<number>('auth.jwt.refreshExpiresIn');
  }

  checkToken(token: string): any {
    return this.jwtService.verify(token, {
      secret: this.secret,
      publicKey: this.secret,
      ignoreExpiration: false
    });
  }

  decodeToken(token: string): any {
    return this.jwtService.decode(token);
  }

  createToken(payload: Token): string {
    return this.jwtService.sign(payload, {
      secret: this.secret,
      expiresIn: this.expiresIn,
    });
  }

  createRefreshToken(payload: Token): string {
    return this.jwtService.sign(payload, {
      secret: this.secret,
      expiresIn: this.refreshExpiresIn,
    });
  }
}
