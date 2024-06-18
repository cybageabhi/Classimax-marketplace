import { Component, inject } from '@angular/core';
import { Router ,Event, NavigationStart, NavigationEnd, NavigationCancel} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'receipe-book';
  showloader:boolean=false;

  constructor(private router:Router){}

  ngOnInit(){
    this.router.events.subscribe((routerEvent:Event)=>{
      if(routerEvent instanceof NavigationStart){
        this.showloader=true;
      }
      if(routerEvent instanceof NavigationEnd){
        this.showloader=false;
      }
      if(routerEvent instanceof NavigationCancel){
        this.showloader=false;
      }
    })
  }
}
