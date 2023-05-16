import { get } from "http";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('charutos')
export class Charuto {

    @PrimaryGeneratedColumn('uuid')
    id_charutos: number

    @Column({ type: 'varchar' })
    imagem: string

    @Column({ type: 'varchar' })
    nome: string

    @Column({ type: 'varchar' })
    descOriginal: string

    @Column({ type: 'varchar' })
    descPessoal: string

    @Column({ type: 'varchar' })
    classificacaoPessoal: number

    @Column({ type: 'varchar' })
    capa: string

}

export default Charuto;
