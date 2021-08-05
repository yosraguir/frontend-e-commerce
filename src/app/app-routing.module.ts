import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DetailArticleComponent} from "./detail-article/detail-article.component";
import {LoginComponent} from "./login/login.component";
import {ArticlesComponent} from "./articles/articles.component";


const routes: Routes = [
  {path: 'articles', component: ArticlesComponent },
  {path: 'detail-article', component: DetailArticleComponent },
  {path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
