import {Entity, model, property} from '@loopback/repository';

@model()
export class Users extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  name?: string;

  @property({
    type: 'number',
    required: true,
  })
  age: number;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'number',
  })
  phone?: number;


  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
