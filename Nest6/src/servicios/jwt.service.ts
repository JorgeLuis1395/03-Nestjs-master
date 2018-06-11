import {Injectable} from "@nestjs/common";
const jwtPaquete = require('jsonwebtoken');
@Injectable()
export class JwtService {
    private readonly secreto = 'el sol no esta calentando';
    private readonly jwt = jwtPaquete;
    private readonly tiempoVidaToken = '30s';
    emitirToken(payload: any){
        return this.jwt.sign(
            {
                expiresIn: this.tiempoVidaToken, data: payload
            },
            this.secreto
        );
    }
    verificarToken(token: string, callback){
        return this.jwt.verify(token,this.secreto,  callback);

    }
}