import { Component } from '@angular/core';
import { Item } from '../../Model/item';

@Component({
  selector: 'app-trending-ads',
  templateUrl: './trending-ads.component.html',
  styleUrl: './trending-ads.component.css'
})
export class TrendingAdsComponent {
   items:Item[]=[
    new Item("11inch Macbook Air","Electronics","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aliquam!",26-4-2023,[1,1,1,1,0],"../../../assets/cheif/assignment images/products-1.jpg",),
    new Item("Full Study Table Combo","Furnitures","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aliquam!",26-4-2023,[1,1,1,1,0],"../../../assets/cheif/assignment images/products-2.jpg"),
    new Item("11inch Macbook Air","Electronics","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aliquam!",26-4-2023,[1,1,1,1,0],"../../../assets/cheif/assignment images/products-3.jpg"),
   ]
}
