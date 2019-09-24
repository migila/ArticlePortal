import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/core/article.model';
import { ActivatedRoute } from '@angular/router';
import { StateSelectorsService } from 'src/app/store/state.selectors.service';
import { Observable } from 'rxjs';
import { StateDispatchersService } from 'src/app/store/state.dispatchers.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  // article: Article;
  id: number = null;
  article$: Observable<Article>;

  constructor(
    private route: ActivatedRoute,
    public stateSelectorService: StateSelectorsService,
    public stateDispatcher: StateDispatchersService
  ) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.has('id')) {
       this.id = Number.parseInt(this.route.snapshot.paramMap.get('id'), 10);
       this.stateDispatcher.setCurrentArticle(this.id);
    }
    this.article$ = this.stateSelectorService.selectCurrentArticle$;
  }

}
