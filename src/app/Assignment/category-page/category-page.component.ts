import { Component } from '@angular/core';
import {
  faAppleAlt,
  faBasketShopping,
  faBriefcase,
  faCar,
  faCoffee,
  faHome,
  faHotel,
  faLaptop,
  faPaw,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css',
})
export class CategoryPageComponent {
  category = [
    {
      type: 'Electornics',
      color: '#ccdb38',
      category_list: [
        {
          item: 'Laptop',
          price: '93',
        },
        {
          item: 'iPhone',
          price: '393',
        },
        {
          item: 'Mircosoft',
          price: '183',
        },
        {
          item: 'Monitors',
          price: '393',
        },
      ],
    },
    {
      type: 'Restaurants',
      color: '#a676b8',
      category_list: [
        {
          item: 'cafe',
          price: '933',
        },
        {
          item: 'Fast food',
          price: '33',
        },
        {
          item: 'Restrurants',
          price: '13',
        },
        {
          item: 'Food Track',
          price: '93',
        },
      ],
    },
    {
      type: 'Real Estate',
      color: '#fe7e17',
      category_list: [
        {
          item: 'Farms',
          price: '93',
        },
        {
          item: 'Gym',
          price: '393',
        },
        {
          item: 'Hospitals',
          price: '183',
        },
        {
          item: 'Parolurs',
          price: '393',
        },
      ],
    },
    {
      type: 'shoppings',
      color: '#EC3A56',
      category_list: [
        {
          item: 'Mens Wears',
          price: '93',
        },
        {
          item: 'Accessories',
          price: '393',
        },
        {
          item: 'It & Software',
          price: '183',
        },
        {
          item: 'Kids Wears',
          price: '393',
        },
      ],
    },
    {
      type: 'Jobs',
      color: '#1DBFFF',
      category_list: [
        {
          item: 'It Jobs',
          price: '93',
        },
        {
          item: 'Cleaning and Washing',
          price: '393',
        },
        {
          item: 'Management',
          price: '183',
        },
        {
          item: 'Voluntary Works',
          price: '393',
        },
      ],
    },
    {
      type: 'Vehicles',
      color: '#02d3a4',
      category_list: [
        {
          item: 'Bus',
          price: '93',
        },
        {
          item: 'Cars',
          price: '393',
        },
        {
          item: 'Motobikes',
          price: '183',
        },
        {
          item: 'Rent a car',
          price: '393',
        },
      ],
    },
    {
      type: 'pets',
      color: '#bc02d3',
      category_list: [
        {
          item: 'Laptop',
          price: '93',
        },
        {
          item: 'iPhone',
          price: '393',
        },
        {
          item: 'Mircosoft',
          price: '183',
        },
        {
          item: 'Monitors',
          price: '393',
        },
      ],
    },
    {
      type: 'Services',
      color: '#025fd3',
      category_list: [
        {
          item: 'Cleaning',
          price: '93',
        },
        {
          item: 'Car Washing',
          price: '393',
        },
        {
          item: 'Clothing',
          price: '183',
        },
        {
          item: 'Business',
          price: '393',
        },
      ],
    },
  ];

  getIcon(type: string) {
    switch (type) {
      case 'Electornics':
        return faLaptop;
      case 'Restaurants':
        return faAppleAlt;
      case 'Real Estate':
        return faHome;
      case 'shoppings':
        return faBasketShopping;
      case 'Jobs':
        return faBriefcase;
      case 'Vehicles':
        return faCar;
      case 'pets':
        return faPaw;
      case 'Services':
        return faLaptop;
      default:
        return faCoffee;
    }
  }
}
