export interface ItemState{
  value: string;
  viewValue: string;
}
export class Category{
  _id!: string;
  slug: string;
  name!: string;
  constructor(values: any){
    if(values){
        this._id = values._id;
        this.name = values.name;
        this.slug = values.slug;

    }
}
}
