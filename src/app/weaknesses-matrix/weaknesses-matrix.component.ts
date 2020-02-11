import { Component, OnInit, Input } from '@angular/core';
import { TemtemTypeResponse } from '../Responses/temtem-type-response';
import { TemtemWeaknessesResponse } from '../Responses/temtem-weaknesses-response';

@Component({
  selector: 'app-weaknesses-matrix',
  templateUrl: './weaknesses-matrix.component.html',
  styleUrls: ['./weaknesses-matrix.component.css']
})
export class WeaknessesMatrixComponent implements OnInit {

  @Input() weaknesses : TemtemWeaknessesResponse;
  @Input() types: TemtemTypeResponse;

  constructor() { }

  ngOnInit(): void {
  }

  // Angular NGFOR doesn't accept "for i = 0; i < 5; i++" synthax
  // So I used this trick to get the same result
  // https://blog.angular-university.io/angular-2-ngfor/
  public tdArray(n: number){
    return [...Array(n).keys()];
  }
}
