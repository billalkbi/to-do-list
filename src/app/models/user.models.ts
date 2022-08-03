import { Address } from "./address.model";

export class User{
  constructor(public firstname: string,
              public lastname: string,
              public email: string,
              public adresse : Address,
              public description : string,
              public dateBirth: string,
              public username : string,
              public aliases?: string[],
              ){

              }
}
