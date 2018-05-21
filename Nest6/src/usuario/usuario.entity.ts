import {Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {FotoEntity} from "../foto/foto.entity";

@Entity('web_carrilloj_usuario')
    export class UsuarioEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    nombre: string;

    @OneToMany(
        type => FotoEntity,
        fotoEntity => fotoEntity.usuario)
    fotos: FotoEntity[];
}