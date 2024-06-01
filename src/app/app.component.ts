import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CustomerComponent } from './customer/customer.component';
import { HeadComponent } from './head/head.component';
import { MenuComponent } from './menu/menu.component';
import { SitesComponent } from './sites/sites.component';
import {FooterComponent}from './footer/footer.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    CustomerComponent,
    HeadComponent,
    MenuComponent,
    SitesComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'messMeister';
}
