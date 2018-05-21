import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";
@Entity('web_carrilloj_usuario')
export class FotoEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column('text')
    url: string;
    @ManyToOne(
        type => UsuarioEntity,
        usuarioEntity => usuarioEntity.fotos)

    usuario: UsuarioEntity;
}