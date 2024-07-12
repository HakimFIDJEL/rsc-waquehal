import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import { Request } from "express";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JwtGuard implements CanActivate{

    constructor(private readonly jwtService: JwtService){}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
    
        if (!token) throw new UnauthorizedException();
    
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: process.env.jwtSecretKey,
            });
            request['user'] = payload;
        } catch (error) {
            throw new UnauthorizedException();
        }
    
        return true;
    }
    
    private extractTokenFromHeader(request: Request): string | undefined {
        const authorization = request.headers.authorization;
        if (!authorization) return undefined;
    
        const [type, token] = authorization.split(' ');
        return type === 'Bearer' ? token : undefined;
    }
    
}