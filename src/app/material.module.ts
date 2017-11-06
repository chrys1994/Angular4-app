import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { 
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatIconRegistry,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule} from '@angular/material';

@NgModule({
    exports:[
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatIconRegistry,
        MatToolbarModule,
        MatTableModule,
        MatDialogModule,
        MatFormFieldModule
    ]

})

export class MaterialModule{
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
      }

}
