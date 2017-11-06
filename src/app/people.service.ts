import { Injectable } from '@angular/core';
import { People} from './mock-people';
import { Hero} from './hero';



@Injectable()
export class PeopleService {
    getPeople(): Promise<Hero[]>{
        return Promise.resolve(People);
    }

}