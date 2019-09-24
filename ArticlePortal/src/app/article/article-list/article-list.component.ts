import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { ApiService } from 'src/app/core/api.service';
import { Article } from 'src/app/core/article.model';
import { StateDispatchersService } from 'src/app/store/state.dispatchers.service';
import { StateSelectorsService } from 'src/app/store/state.selectors.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  newArticle: Subject<Article[]>;


  constructor(
    private stateDispatcher: StateDispatchersService,
    public stateSelector: StateSelectorsService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.stateDispatcher.loadUsers();
  }
}
