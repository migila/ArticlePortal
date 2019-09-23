import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

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
