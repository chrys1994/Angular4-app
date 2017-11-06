import { Component, OnInit,Inject} from '@angular/core';
import { Hero } from './hero';
import { PeopleService } from './people.service';
import { People } from './mock-people';
import { ActivatedRoute,Params, ParamMap } from '@angular/router';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'edit-people',
    templateUrl:'html/edit-people.html',
    styleUrls: ['./app.component.css']
})

export class EditPeople implements OnInit{
    private heros:Hero;
    private nameEdited:any;
    private surnameEdited:any;
    private ageEdited:any;
    private emailEdited:any;
    private id:any;
    private people:Hero[];
    
      constructor(private peopleService : PeopleService,
        public dialogRef: MatDialogRef<EditPeople>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    closeDialog(){
            this.dialogRef.close();
        }        

    

    editHero(){
        this.heros = this.people.find(hero => {
            return hero.id === this.id;
        });

        this.newFunction();
        this.closeDialog();

        }    

    ngOnInit() :void{
        this.people=[];
        this.peopleService.getPeople().then(people =>this.people=people);
        this.id=this.data.heros.id;
        this.nameEdited=this.data.heros.name;
        this.surnameEdited=this.data.heros.surname;
        this.ageEdited=this.data.heros.age;
        this.emailEdited=this.data.heros.email;
    }

    private newFunction() {
        this.heros = this.people.find(hero => {
            return hero.id === this.id;
        });
        if (this.heros.name != this.nameEdited) {
            this.heros.name = this.nameEdited;
        }
        if (this.heros.surname != this.surnameEdited) {
            this.heros.surname = this.surnameEdited;
        }
        if (this.heros.age != this.ageEdited) {
            this.heros.age = this.ageEdited;
        }
        if (this.heros.email != this.emailEdited) {
            this.heros.email = this.emailEdited;
        }
    }


}