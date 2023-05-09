import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { CharacterDetails, CharactersResponse } from 'src/app/services/api/api.type';
import * as mockData from './../../data/data.mock.json'

@Component({
  selector: 'app-characters-table',
  templateUrl: './characters-table.component.html',
  styleUrls: ['./characters-table.component.css']
})
export class CharactersTableComponent implements OnInit {

  constructor(private apiService: ApiService){}

  charactersDetails: CharacterDetails[] = []
  nextPage: string | null = null;
  prevPage: string | null = null;

  // metoda cyklu życia
  ngOnInit(): void {
    this.apiService.getCharacters().subscribe(data => {
      this.charactersDetails = data.results

      // Analizujemy wartośc next i wybieramy numer kolejnego page'a jesli istnieje
      const {next} = data.info
      this.nextPage = next ? new URL(next).searchParams.get('page') : null;

      //TODO: 
      // 1 - na podstawie powyzszego schematu zadeklarowac wartosc zmiennej prevPage
      // 2 - w templatce uzyc dyrektywy ngIf do wyswietlenia buttonu z guzikiem Next / Prev jesli wartosci next \ prev istnieja
      // 3* - na podstawie klikniecia w buton wywołać metody onNextPage / onPrevPage 
      // 4** - zaimplementowac pobieranie danych z danego paga w serwisie (wymaga zmiany metody getCharacters() poprzed dodanie jej parametru page getCharacters(page))

    })
  }

  onNextPage(){

  }

  onPrevPage(){
    
  }
  
 
}
