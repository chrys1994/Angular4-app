import { Component,Input,OnInit,SimpleChanges} from '@angular/core';
import { Hero } from './hero';
import { People} from './mock-people';
import { EditPeople } from './edit-people';
import {MatDialog} from '@angular/material';

//import per la table
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Component({
    selector: 'people-detail',
    templateUrl:'html/table-detail.html',
    styleUrls: ['./app.component.css'],
})

export class PeopleDetailComponent implements OnInit{
    @Input() hero: Hero;
    displayedColumns = ['Age','Email','Action'];
    users:Hero[];
    datasource:TableDataSource;

    constructor(public dialog: MatDialog){ }

    ngOnInit(): void{
      this.users=[];
      this.users.push(this.hero);
      this.datasource = new TableDataSource(this.users);
    }

    ngOnChanges(changes:SimpleChanges){
      for(let hero in changes){
        let oldHero = changes[hero].previousValue;
        let newHero = changes[hero].currentValue;
        if(oldHero != newHero){
          this.users=[];
          this.users.push(changes[hero].currentValue);
          this.datasource = new TableDataSource(this.users);
        }
      }
    }

    openDialog(hero:Hero){
      let dialogRef = this.dialog.open(EditPeople, {
        data: { heros : hero },
        height: '400px',
        width: '600px'
      });  
    }

    
  onNoClick(): void {
    this.dialog.closeAll();
  }
    
  }

export class TableDataSource extends DataSource<Hero> {
    
 constructor(private users: Hero[]){
     super()
 }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<Hero[]> {
      return Observable.of(this.users);
    }   
  disconnect() {}
}



 

