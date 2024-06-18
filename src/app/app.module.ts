import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavComponent } from './Assignment/nav/nav.component';
import { HomepageComponent } from './Assignment/homepage/homepage.component';
import { TrendingAdsComponent } from './Assignment/trending-ads/trending-ads.component';
import { CategoryPageComponent } from './Assignment/category-page/category-page.component';
import { FooterComponent } from './Assignment/footer/footer.component';
import { FooterBottomComponent } from './Assignment/footer-bottom/footer-bottom.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './Assignment/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomepageComponent,
    TrendingAdsComponent,
    CategoryPageComponent,
    FooterComponent,
    FooterBottomComponent,
    DashboardComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],//we declare services in providers
  bootstrap: [AppComponent]
})
export class AppModule { }
 