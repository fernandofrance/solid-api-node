import { uuid } from "uuidv4";

export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid()
    }
  }
}

// O Omit<User, 'id'> significa que ele vai requisitar todas as propriedades
// do tipo User exceto o id, que é dado como opcional logo depois

// O Object.assign age como se estivéssemos fazendo this.name = name e etc manualmente

// Se não for passado id, o construtor irá criar um uuid