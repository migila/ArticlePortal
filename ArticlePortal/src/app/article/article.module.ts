import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleListItemComponent } from './article-list-item/article-list-item.component';
import { ArticleRoutingModule } from './article-routing.module';


@NgModule({
  declarations: [
    ArticleListComponent, 
    ArticleListItemComponent, 
    ArticleDetailComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
