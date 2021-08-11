import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  text: any;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  useLanguage(language: string): void {
    this.translate.use(language);
  }

  textbt="FR"
  fonction(){
    if(this.textbt=="FR")
      this.textbt="EN";
    else
      this.textbt="FR";

  }
  ngOnInit(): void {
    text:string:"EN"
  }

}
