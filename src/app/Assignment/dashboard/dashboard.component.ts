import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  products: any[] = [
    {
      title: 'Macbook Pro 16inch',
      Image: '../../../assets/cheif/assignment images/products-1.jpg',
      postdata: 'jun-27-2024',
      status: 'active',
      location: 'dhaka',
    },
    {
      title: 'Macbook Pro 15inch',
      Image: '../../../assets/cheif/assignment images/products-2.jpg',
      postdata: 'jun-27-2024',
      status: 'active',
      location: 'dhaka',
    },
    {
      title: 'Macbook Pro 15inch',
      Image: '../../../assets/cheif/assignment images/products-3.jpg',
      postdata: 'jun-27-2024',
      status: 'active',
      location: 'dhaka',
    },
    {
      title: 'Macbook Pro 15inch',
      Image: '../../../assets/cheif/assignment images/product-4.jpg',
      postdata: 'jun-27-2024',
      status: 'active',
      location: 'dhaka',
    },
    {
      title: 'Macbook Pro 15inch',
      Image: '../../../assets/cheif/assignment images/product-6.jpg',
      postdata: 'jun-27-2024',
      status: 'active',
      location: 'dhaka',
    },
  ];
}
