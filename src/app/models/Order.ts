export class Order {
  id!: number;
  items!:  [];
  totalAmount!: string;
  name!: string;
  address!: string;
  phone!: string;
  paymentMethod!: string;
/*

  [
    {

      item: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "product",
      },
      quantity: {
        type: String,
        required: true,
      },
    },
  ],

*/
  constructor(values: any){
      if(values){
          this.id = values.id;
          this.name = values.name;
          this.items = values.items;
          this.phone = values.phone;
          this.totalAmount = values.totalAmount;
          this.paymentMethod = values.paymentMethod;
          this.address = values.address;
      }
  }
}

