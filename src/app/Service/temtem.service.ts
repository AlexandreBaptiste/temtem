//#region 
// Base imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map }    from 'rxjs/operators';
import { ApiConstantes } from '../Constantes/api-constantes';

// Responses imports
import { TemtemListResponse } from '../Responses/temtem-list-response';
import { TemtemTypeResponse } from '../Responses/temtem-type-response';
import { TemtemWeaknessesResponse } from '../Responses/temtem-weaknesses-response';
//#endregion

@Injectable()
export class TemtemService {

    // Base constructor 
    // HTTP Client
    constructor(private httpClient: HttpClient) {}

    //#region Getters
    public getTemtemsList(): Observable<TemtemListResponse[]> {
        return this.httpClient.get<TemtemListResponse[]>(ApiConstantes._temtemListUrl);
    }
    
    public getTemtemsTypes(): Observable<TemtemTypeResponse[]> {
        return this.httpClient.get<TemtemTypeResponse[]>(ApiConstantes._temtemTypesUrl);
    }

    public getTemtemsWeaknesses(): Observable<TemtemWeaknessesResponse> {
        return this.httpClient.get<TemtemWeaknessesResponse>(ApiConstantes._temtemWeaknessesUrl).pipe(
            map(weakness => new TemtemWeaknessesResponse().deserialize(weakness))
        );
    }
    //#endregion
}