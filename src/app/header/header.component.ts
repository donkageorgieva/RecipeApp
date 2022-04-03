import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() newActiveLink = new EventEmitter<string>();
  openDropdown: boolean = false;
  onNavigate(link: string) {
    this.newActiveLink.emit(link);
  }

  constructor() {}

  ngOnInit(): void {}
}
