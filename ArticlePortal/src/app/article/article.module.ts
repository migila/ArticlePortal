import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleListItemComponent } from './article-list-item/article-list-item.component';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleContainerComponent } from './article-container/article-container.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleListItemComponent,
    ArticleDetailComponent,
    ArticleContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    ArticleRoutingModule
  ],
  exports: [
    ArticleContainerComponent
  ]
})
export class ArticleModule { }
