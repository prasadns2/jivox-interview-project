// Angular
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

// Rxjs
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

// Interfaces
import { IRule, IRuleApiResponse } from "../interfaces/rule.interface";

@Injectable({ providedIn: 'root' })
export class RuleApiService {

  constructor(private http: HttpClient) { }

  getRulesList(): Observable<IRule[]> {
    return this.http.get<IRuleApiResponse>(`http://jivoxdevuploads.s3.amazonaws.com/eam-dev/files/44939/Rule%20JSON.json`)
    .pipe(
      map((res) =>  {
        console.log(res);
        // Presently no rule data object is present without ruleName but uncommenting below line will add one to test
        // res.data.push({id: '124'});
        return res.data;
      })
      )
  }
}
