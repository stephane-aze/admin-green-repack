export class Auth {
  id!: number;
  email!: string;
  token?: string;


  constructor(values: any){
      if(values){
          this.id = values.id;
          this.email = values.email;
          this.token = values.accessToken;
      }
  }
}
