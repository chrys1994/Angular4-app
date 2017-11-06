import { Component,OnInit } from "@angular/core";
import { Location }  from '@angular/common';
import {Router} from '@angular/router';
import { DataServiceService } from './service/data-service.service';

@Component({
    selector: 'myapp-root',
    template: '<div><mat-toolbar color="primary" ><h1 class="toolbar">{{title}}</h1></mat-toolbar></div>'
    +'<a routerLink="/{{direct}}"><button mat-raised-button color="primary" class="button" (click)="showHideEmployee()" [class.changeColor]="intero == 1">'
    +'<mat-icon class="search-icon" svgIcon="search-icon"></mat-icon>{{showOrHide}} Employee</button></a>'
    +'<router-outlet><br><br></router-outlet>',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
    title = 'Welcome!!'; 
    showOrHide = 'Show';
    intero=0;
    private direct:string;

    constructor(
        private location: Location, private router:Router,private dataService:DataServiceService
      ) {}

    ngOnInit(){
 
        //stampa in console oggetti presi da un servizio REST
        this.dataService.getPosts().subscribe((posts) => {
           // console.log(posts);
        });
    } 

    showHideEmployee(){
         if(this.intero==0){
            this.showOrHide='Hide';
            this.intero=1;
            this.direct='people';
         }else if(this.intero==1){
            this.showOrHide='Show';
            this.intero=0;
            this.direct='';
            
         }
    }


}