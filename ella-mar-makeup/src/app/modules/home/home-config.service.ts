import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeConfigService {

  constructor() { }

  getHomeLinks() {
    return [
      {
        value: 'Portfolio',
        path: ''
      },
      {
        value: 'Contact',
        path: ''
      },
      {
        value: 'About',
        path: ''
      },
      {
        value: 'Prices',
        path: ''
      }
    ]
  }
}
