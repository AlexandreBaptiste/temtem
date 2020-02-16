import { Component, OnInit, Input } from '@angular/core';
import { TemtemListResponse } from '../Responses/temtem-list-response';
import { TemtemTypeResponse } from '../Responses/temtem-type-response';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() temtemList : TemtemListResponse;
  @Input() types: TemtemTypeResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
