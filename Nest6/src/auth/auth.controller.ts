import {BadRequestException, Body, Controller, Post} from "@nestjs/common";
import {JwtService} from "../servicios/jwt.service";

@Controller('Auth')
export class AuthController{
    constructor(private _jwtService: JwtService){}
    @Post('login')
    login(
        @Body('username') username:string,
            @Body('password') password:string,
    ){
        const  enviaUsername = username;
            const enviaPassword = password;
            const enviaParametros = enviaUsername && enviaPassword
        if (enviaParametros){
                if(username === 'jorge' && password ==='123'){
                    const payload = {
                        username: username
                    };
                    return this._jwtService.emitirToken(payload);
                }
                else {
                    throw new BadRequestException({mensaje: 'Credenciales invalidas'})
                }}
                else{
            throw new BadRequestException({mensaje: 'Credenciales invalidas'})
            }
        }
}
