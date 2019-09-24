import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleContainerComponent } from './article-container/article-container.component';


const routes: Routes = [
    {
        path: 'articles',
        component: ArticleContainerComponent
    }
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
