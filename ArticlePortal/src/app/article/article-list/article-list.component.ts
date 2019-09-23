import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/user.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

    users: User[];

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      users => this.users = users
    );
  }

}
