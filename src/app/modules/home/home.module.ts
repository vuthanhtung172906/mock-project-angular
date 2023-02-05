import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ArticleFeedComponent } from './components/article-feed/article-feed.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleTagComponent } from './components/article-tag/article-tag.component';

@NgModule({
  declarations: [HomeComponent, ArticleFeedComponent, ArticleListComponent, ArticleTagComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ],
})
export class HomeModule {}
