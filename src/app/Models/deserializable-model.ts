// https://nehalist.io/angular-7-models/
export interface Deserializable {
    deserialize(input: any): this;
}