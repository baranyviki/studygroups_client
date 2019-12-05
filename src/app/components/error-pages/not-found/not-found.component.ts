import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
 
  public notFoundText: string = `404 : Page not found`;
  public notFoundDetails: string = `Sorry, the page you requested could not be found on the server.`;

  constructor() { }

  ngOnInit() {
  }

}