import {Injectable} from "@nestjs/common";
const jwtPaquete = require('jsonwebtoken');
@Injectable()
export class JwtService {
    private readonly secreto = 'el sol no esta calentando';
    private readonly jwt = jwtPaquete;
    emitirToken(payload: any){
        return this.jwt.sign(
            payload, this.secreto
        );
    }
    verificarToken(token: string, callback){
        return this.jwt.verify(token,this.secreto,  callback);

    }
}