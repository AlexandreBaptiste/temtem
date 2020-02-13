/**
 * "Neutral": {
    "Neutral": 1,
    "Fire": 1,
    "Water": 1,
    "Nature": 1,
    "Electric": 1,
    "Earth": 1,
    "Mental": 0.5,
    "Wind": 1,
    "Digital": 1,
    "Melee": 1,
    "Crystal": 1,
    "Toxic": 1
  }
 * Here is the inside object of "Neutral"
 * DOC: https://nehalist.io/angular-7-models/
 */
export class WeaknessModel {
    Neutral : number;
    Fire : number;
    Water : number;
    Nature : number;
    Electric : number;
    Earth : number;
    Mental : number;
    Wind : number;
    Digital : number;
    Melee : number;
    Crystal : number;
    Toxic : number;   

    deserialize(input: any): this{
        return Object.assign(this, input);
    }
}