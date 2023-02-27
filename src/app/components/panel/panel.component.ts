import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchingService } from 'src/app/services/searching/searching.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {

  searchedText: string = '';
  @Output() searchRequestedEvent = new EventEmitter<string>();
  constructor(private router : Router, private searchingService: SearchingService) { }

  searchRequested() {
    this.searchRequestedEvent.emit(this.searchedText);
    this.router.navigateByUrl('/search');
    this.searchingService.searchedText = this.searchedText;
    this.searchedText = '';
  }

  goHome() {
    this.router.navigateByUrl('/');
  }

}
