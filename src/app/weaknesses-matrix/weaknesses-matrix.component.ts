import { Component, OnInit, Input } from '@angular/core';
import { TemtemTypeResponse } from '../Responses/temtem-type-response';
import { TemtemWeaknessesResponse } from '../Responses/temtem-weaknesses-response';
import { WeaknessModel } from '../Models/weakness-model';
import { ClassConstantes } from '../Constantes/class-constantes';

@Component({
  selector: 'app-weaknesses-matrix',
  templateUrl: './weaknesses-matrix.component.html',
  styleUrls: ['./weaknesses-matrix.component.css']
})
export class WeaknessesMatrixComponent implements OnInit {

  @Input() weaknesses : TemtemWeaknessesResponse;
  @Input() types: TemtemTypeResponse;
  weaknessMultiplicator: number;

  constructor() { }

  ngOnInit(): void {
  }

  // Angular NGFOR doesn't accept "for i = 0; i < 5; i++" synthax
  // So I used this trick to get the same result
  // https://blog.angular-university.io/angular-2-ngfor/
  public tdArray(n: number){
    return [...Array(n).keys()];
  }

  // Return the class for a calculated weakness
  public populateCellBackground(attacking: number, defending: number): string {
    switch(this.getWeaknessMultiplicator(attacking, defending)){
      case 0.5:
        return ClassConstantes.WEAK_CLASS;
      case 1:
        return ClassConstantes.NEUTRAL_CLASS;
      case 2: 
        return ClassConstantes.EFFECTIVE_CLASS;
      default:
        return ClassConstantes.NOT_FOUND;
    }     
  }

  // Define "Weakness Multiplicator" by associating table ID to type 
  public getWeaknessMultiplicator(attacking: number, defending: number): number{
    switch(attacking) {
      case 0:
        return this.calculateWeaknessMultiplicator(this.weaknesses.Neutral, defending);
      case 1:
        return this.calculateWeaknessMultiplicator(this.weaknesses.Fire, defending);
      case 2:
        return this.calculateWeaknessMultiplicator(this.weaknesses.Water, defending);   
      case 3:
        return this.calculateWeaknessMultiplicator(this.weaknesses.Nature, defending);  
      case 4:
        return this.calculateWeaknessMultiplicator(this.weaknesses.Electric, defending); 
      case 5:
        return this.calculateWeaknessMultiplicator(this.weaknesses.Earth, defending); 
      case 6:
        return this.calculateWeaknessMultiplicator(this.weaknesses.Mental, defending);  
      case 7:
        return this.calculateWeaknessMultiplicator(this.weaknesses.Wind, defending);  
      case 8:
        return this.calculateWeaknessMultiplicator(this.weaknesses.Digital, defending);  
      case 9:
        return this.calculateWeaknessMultiplicator(this.weaknesses.Melee, defending);
      case 10:
        return this.calculateWeaknessMultiplicator(this.weaknesses.Crystal, defending); 
      case 11:
        return this.calculateWeaknessMultiplicator(this.weaknesses.Toxic, defending); 
      default:
        return 0;    
    }
  }

  // With attacking type and defending number we can return the "weakness value"
  public calculateWeaknessMultiplicator(weakness: WeaknessModel,defending: number): number {
    switch(defending) {
      case 0:
        return weakness.Neutral;
      case 1:
        return weakness.Fire;
      case 2:
        return weakness.Water;   
      case 3:
        return weakness.Nature;   
      case 4:
        return weakness.Electric;  
      case 5:
        return weakness.Earth;  
      case 6:
        return weakness.Mental;   
      case 7:
        return weakness.Wind;
      case 8:
        return weakness.Digital;  
      case 9:
        return weakness.Melee;
      case 10:
        return weakness.Crystal;
      case 11:
        return weakness.Toxic;
      default:
        return 0;
    }
  } 
}
