import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export default class StudentTypeOrmEntity {
  @PrimaryColumn({ name: 'id', type: 'uuid' })
  id: string;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'registration' })
  registration: number;

  @Column({ name: 'phoneNumber' })
  phoneNumber: string;
}
