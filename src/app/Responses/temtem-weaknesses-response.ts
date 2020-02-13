import { WeaknessModel } from "../Models/weakness-model";
import { Deserializable } from "../Models/deserializable-model";

/*
* See @weakness-model for API response
* DOC: https://nehalist.io/angular-7-models/
*/
export class TemtemWeaknessesResponse implements Deserializable {
  Neutral: WeaknessModel;
  Fire : WeaknessModel;
  Water : WeaknessModel;
  Nature : WeaknessModel;
  Electric : WeaknessModel;
  Earth : WeaknessModel;
  Mental : WeaknessModel;
  Wind : WeaknessModel;
  Digital : WeaknessModel;
  Melee : WeaknessModel;
  Crystal : WeaknessModel;
  Toxic : WeaknessModel;
  
  deserialize(input: any): this {
    Object.assign(this, input);
    this.Neutral = new WeaknessModel().deserialize(input.Neutral);
    this.Fire = new WeaknessModel().deserialize(input.Fire);
    this.Water = new WeaknessModel().deserialize(input.Water);
    this.Nature = new WeaknessModel().deserialize(input.Nature);
    this.Electric = new WeaknessModel().deserialize(input.Electric);
    this.Earth = new WeaknessModel().deserialize(input.Earth);
    this.Mental = new WeaknessModel().deserialize(input.Mental);
    this.Wind = new WeaknessModel().deserialize(input.Wind);
    this.Digital = new WeaknessModel().deserialize(input.Digital);
    this.Melee = new WeaknessModel().deserialize(input.Melee);
    this.Crystal = new WeaknessModel().deserialize(input.Crystal);
    this.Toxic = new WeaknessModel().deserialize(input.Toxic);
    return this;
  }
}