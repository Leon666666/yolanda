import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Home } from './home/home.component';
import { ShowCase } from './showCase/showCase.component';
import { Gallery } from './gallery/gallery.component';
import { Modal } from './modal/modal.component';
import { Control } from './control/control.component';
import { Contact } from './contact/contact.component';

const appRoutes: Routes = [
  { path: '',  component: ShowCase },
  { path: 'home',  component: Home },
  { path: 'gallery',  component: Gallery },
  { path: 'contact', component: Contact },
  { path: 'control', component: Control },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    Home,
    ShowCase,
    Gallery,
    Modal,
    Control,
    Contact
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
