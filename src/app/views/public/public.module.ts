import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public.routing';
import {
  AboutComponent,
  ContactComponent,
  ExperienceComponent,
  FooterComponent,
  HomeComponent,
  StudiesComponent
} from './components';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CanDoComponent } from './components/can-do/can-do.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    HomeComponent,
    PublicComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    FooterComponent,
    StudiesComponent,
    CanDoComponent,
    LanguageSelectorComponent,
  ],
  imports: [
    CommonModule,
    SweetAlert2Module.forRoot(),
    NgOptimizedImage,
    FontAwesomeModule,
    PublicRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
})
export class PublicModule {}