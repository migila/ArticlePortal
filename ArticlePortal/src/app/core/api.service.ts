import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { User } from './user.model';


@Injectable( { providedIn: 'root' } )
export class ApiService {

    constructor(private http: HttpClient
    ) {}

    httpOptions = {
        headers: new HttpHeaders({ Authorization: 'Bearer kBF0Dl8iK21EvencMgJBHSz7ILknbX-cxK2-' })
    };

    getUsers(): Observable<User[]> {
        const url = 'https://gorest.co.in/public-api/users';
        return this.http.get<any>(url, this.httpOptions)
            .pipe(
                map(
                    response => {
                        const userList = [...response.result];
                        return userList as User[];
                    }
                )
            );
    }

}
