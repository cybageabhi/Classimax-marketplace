export class Item{
    name:string;
    catergory:string;
    product_discription:string;
    date_of_lunch:Date;
    rating:number[];
    image:string;

    constructor(name,category,product_discription,date_of_lunch,rating,image){
        this.name=name;
        this.catergory=category;
        this.product_discription=product_discription;
        this.date_of_lunch=date_of_lunch;
        this.rating=rating,
        this.image=image
    }
}