//#region 
// Base imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// Responses imports
import { TemtemListResponse } from '../Responses/temtem-list-response';
import { TemtemTypeResponse } from '../Responses/temtem-type-response';
import { TemtemWeaknessesResponse } from '../Responses/temtem-weaknesses-response';
//#endregion

@Injectable()
export class TemtemService {

    //#region URLs
    private _baseAPIUrl = "https://temtem-api.mael.tech";
    private _temtemListUrl = "https://temtem-api.mael.tech/api/temtems";
    private _temtemTypesUrl = "https://temtem-api.mael.tech/api/types";
    private _temtemWeaknessesUrl = "https://temtem-api.mael.tech/api/weaknesses/calculate";
    //#endregion

    // Base constructor 
    // HTTP Client
    constructor(private httpClient: HttpClient) {}

    //#region Getters
    public getTemtemsList(): Observable<TemtemListResponse[]> {
        return this.httpClient.get<TemtemListResponse[]>(this._temtemListUrl);
    }
    
    public getTemtemsTypes(): Observable<TemtemTypeResponse[]> {
        return this.httpClient.get<TemtemTypeResponse[]>(this._temtemTypesUrl);
    }

    public getTemtemsWeaknesses(): Observable<TemtemWeaknessesResponse[]> {
        return this.httpClient.get<TemtemWeaknessesResponse[]>(this._temtemWeaknessesUrl);
    }
    //#endregion
}