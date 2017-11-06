import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule }   from '@angular/router';//<-- router
import { HttpModule} from '@angular/http';
import { 
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatIconRegistry,
  MatToolbarModule,
  MatTableModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import {DataSource} from '@angular/cdk/collections';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'zone.js';
import 'reflect-metadata';

//my app component
import { AppComponent } from './app.component';
import { PeopleDetailComponent} from './people-detail.component';
import { PeopleComponent } from './people.component';
import { PeopleService } from './people.service';
import { DataServiceService } from './service/data-service.service';
import { EditPeople } from './edit-people';


@NgModule({
  declarations: [
    AppComponent,
    PeopleDetailComponent,
    PeopleComponent,
    EditPeople    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'people',// <--definisco il path da inserire nella barra degli indirizzi per una determinata view
        component: PeopleComponent //componente che verrà creato quando inserisco il path
      },
      {
        path: 'edit/:id',
        component:EditPeople
      }
    
    ])
  ],
  providers: [PeopleService,DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  //save new icon in MatIconRegistry
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('./assets/ic_face_black_24px.svg'));
    iconRegistry.addSvgIcon(
          'search-icon',
          sanitizer.bypassSecurityTrustResourceUrl('./assets/ic_search_white_24px.svg'));
    iconRegistry.addSvgIcon(
            'backspace-icon',
            sanitizer.bypassSecurityTrustResourceUrl('./assets/ic_backspace_white_18px.svg'));
    iconRegistry.addSvgIcon(
              'edit-icon',
              sanitizer.bypassSecurityTrustResourceUrl('./assets/ic_mode_edit_white_18px.svg'));        
  }
}


