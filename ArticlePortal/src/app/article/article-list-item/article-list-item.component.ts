import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Article } from 'src/app/core/article.model';
import { StateSelectorsService } from 'src/app/store/state.selectors.service';

@Component({
  selector: 'app-article-list-item',
  templateUrl: './article-list-item.component.html',
  styleUrls: ['./article-list-item.component.scss']
})
export class ArticleListItemComponent implements OnInit {

  @Input() userId: number;

  newArticles: Article[];

  constructor(
    public stateSelector: StateSelectorsService
  ) { }

  ngOnInit() {
    this.filterArticles(this.userId);
  }

  filterArticles(id: number) {
    this.stateSelector.selectArticlesByUser$(id).subscribe(
      x => this.newArticles = x);
  }

  showDetail(article: Article) {
    console.log(article);
  }
}
