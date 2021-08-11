import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DetailArticleComponent} from "./detail-article/detail-article.component";
import {LoginComponent} from "./login/login.component";
import {ArticlesComponent} from "./articles/articles.component";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'articles', component: ArticlesComponent },
  {path: 'detail-article', component: DetailArticleComponent },
  {path: 'login', component: LoginComponent },
  {path: 'contact', component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
