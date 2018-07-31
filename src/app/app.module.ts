import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Home } from './app.component.home';
import { ShowCase } from './app.component.showCase';
import { Gallery } from './app.component.gallery';

const appRoutes: Routes = [
  { path: '',  component: ShowCase },
  { path: 'home',  component: Home },
  { path: 'gallery',  component: Gallery },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    Home,
    ShowCase,
    Gallery
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
