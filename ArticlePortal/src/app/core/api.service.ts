import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from './article.model';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient
    ) {}

    httpOptions = {
        headers: new HttpHeaders({ Authorization: 'Bearer kBF0Dl8iK21EvencMgJBHSz7ILknbX-cxK2-' })
    };

    getUsers(): Observable<User[]> {
        const url = 'https://gorest.co.in/public-api/users?page=70';
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

    getArticlesByAuthor(id: number): Observable<Article[]> {
        const url = 'https://gorest.co.in/public-api/posts?user_id=' + id;
        return this.http.get<any>(url, this.httpOptions)
            .pipe(
                map(
                    response => {
                        const articleList = [...response.result];
                        return articleList as Article[];
                    }
                )
            )
    }

}
