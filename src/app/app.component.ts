import { Component, OnInit } from '@angular/core';
import { TemtemService } from './Service/temtem.service';
import { TemtemListResponse } from './Responses/temtem-list-response';
import { TemtemTypeResponse } from './Responses/temtem-type-response';
import { TemtemWeaknessesResponse } from './Responses/temtem-weaknesses-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {  
  title = "Temtem";

  public temtemsArray: TemtemListResponse[];
  public typesArray: TemtemTypeResponse[];    
  public weaknessesArray: TemtemWeaknessesResponse[];

  constructor (private temtemService: TemtemService) {
  }

  // Fetch all API Data
  private initializeAPI(){
    this.temtemService.getTemtemsList().subscribe(response       => { this.temtemsArray    = response; });
    this.temtemService.getTemtemsTypes().subscribe(response      => { this.typesArray      = response; });
    this.temtemService.getTemtemsWeaknesses().subscribe(response => { this.weaknessesArray = response; });
  }

  ngOnInit(){
    this.initializeAPI();
  }

  ngOnDestroy(){
    // TODO: Unsubscribe
  }
}
