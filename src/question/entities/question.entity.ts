import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Questions {
    @PrimaryGeneratedColumn()
    Question_Id: number;

    @Column({ unique: true })
    Question_Text: string;

    @Column()
    Option_A: string;

    @Column()
    Option_B: string;

    @Column()
    Option_C: string;

    @Column()
    Option_D: string;

    @Column()
    Correct_Option: string;
}
