import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/user.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) { }

    users: User[];

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.apiService.getUsers().subscribe(
      users => this.users = users
    );
  }

}
