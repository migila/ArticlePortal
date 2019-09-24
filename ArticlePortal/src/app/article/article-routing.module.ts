import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleContainerComponent } from './article-container/article-container.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';


const routes: Routes = [
    {
        path: '',
        component: ArticleContainerComponent,
        children: [
          {
            path: 'detail/:id',
            component: ArticleDetailComponent
          }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ArticleRoutingModule {}
