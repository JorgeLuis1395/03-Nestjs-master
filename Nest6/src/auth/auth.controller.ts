import {BadRequestException, Body, Controller, Post,} from "@nestjs/common";
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
    @Post('verificarJWT')
    verificarJWT(
        @Body('jwt') jwt: string,
    ) {
        const tieneParametros = jwt;
        if (tieneParametros) {
            this._jwtService
                .verificarToken(
                    jwt,
                    (error, data) => {
                        if (error) {
                            throw new BadRequestException(
                                {
                                    mensaje: 'Jwt invalido',
                                    error: error
                                }
                            )
                        } else {
                            return {
                                mensaje: 'Ok',
                                data: data
                            }
                        }
                    }
                )
        } else {
            throw new BadRequestException(
                {
                    mensaje: 'No envia jwt'
                }
            )
        }
    }
}
