import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SearchingService } from './services/searching/searching.service';
import { TrendingService } from './services/trending/trending.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MovieApp';

  constructor(private router: Router, private trendingService: TrendingService, private searchingService: SearchingService) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        trendingService.pageNumber = 1;
        searchingService.pageNumber = 1;
      }
    });
  }
}
