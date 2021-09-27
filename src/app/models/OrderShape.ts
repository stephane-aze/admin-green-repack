export class OrderShape {
  items!:  [];
  totalAmount!: string;

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
          this.items = values.items;
          this.totalAmount = values.totalAmount;
      }
  }
}
