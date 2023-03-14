import { Component} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent {

  constructor(private translate: TranslateService) {
    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');
  }
  
  setLanguage() {
    if ( this.translate.currentLang === 'en') {
      this.translate.use('es');
    }
    else {
      this.translate.use('en');
    }
  } 
  
}
