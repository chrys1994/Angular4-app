import { Component, OnInit } from '@angular/core';

import { Hero} from './hero';

import { PeopleService } from './people.service';

@Component({
  selector: 'people-root',
  templateUrl: './html/app.myHomePage.html',
  styleUrls: ['./app.component.css'],
  //providers:[PeopleService] // <-- dice all'APP quando deve creare una nuova instanza del servizio, 
                            //in questo caso quando viene creato un app component
  
})
export class PeopleComponent implements OnInit{
  people: Hero[];
  selectedHero: Hero; 
  idHero;

  ngOnInit(): void{
    this.peopleService.getPeople().then(people => this.people=people);
  }

  constructor(private peopleService: PeopleService) {
  // <-- definisco una variabile privata stabilendo dove verrà instanziato il servizio
  }
  
  onSelect(hero: Hero): void {
    if(this.idHero!=hero.id){
      this.selectedHero = hero;
      this.idHero=hero.id;
    }else{
      this.idHero=0;
    }
      
  }
}







