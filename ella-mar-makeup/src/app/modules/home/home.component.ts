import { Component, OnInit } from '@angular/core';
import { HomeConfigService } from './home-config.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  homeLinks: any | undefined;

  constructor(
    private homeConfigService: HomeConfigService
  ) {}

  ngOnInit() {
    this.homeLinks = this.homeConfigService.getHomeLinks();
  }

}
