import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/core/user.model';
import { StateDispatchersService } from 'src/app/store/state.dispatchers.service';
import { StateSelectorsService } from 'src/app/store/state.selectors.service';
import { Article } from 'src/app/core/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  newArticle: Subject<Article[]>;


  constructor(
    private stateDispatcher: StateDispatchersService,
    public stateSelector: StateSelectorsService
  ) { }

  ngOnInit() {
    this.stateDispatcher.loadUsers();
    this.stateSelector.selectAllUsers$.subscribe(
      users => {
        if ( users ) {
          for (let i = 0; i < 5; i++) {
            this.stateDispatcher.loadArticles(users[i].id);
          }
        }
      }
    );
  }

  filterArticles(id: number) {
    this.stateSelector.selectArticlesByUser$(id).subscribe(
      x => this.newArticle.next(x));
  }
}
