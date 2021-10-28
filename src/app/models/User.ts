export class User {
  _id!: number;
  name!: string;
  email!: string;
  phone!: string;
  accessToken?: string;
  address!: Array<Address>
  association!: Object;
  role!: string;
  isValid: boolean;

  constructor(values: any){
      if(values){
          this._id = values._id;
          this.name = values.name;
          this.email = values.email;
          this.phone = values.phone;
          this.role = values.role;
          this.accessToken = values.accessToken;
          this.address = values.address;
          this.association = values.association;
      }
  }
}
export class Address{
  street: string;
  zipcode: string;
  city: string;
  constructor(value:any){
    this.city = value.city;
    this.street = value.street;
    this.zipcode = value.zipcode;
  }

}
