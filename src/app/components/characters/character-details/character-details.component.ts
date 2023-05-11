import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  characterId: number;

  constructor(private router: ActivatedRoute){
    this.characterId = this.router.snapshot.params['id']
  }

  ngOnInit(): void {
    //Tu pobierz dane z api
    // this.apiService.getCharacterById(this.characterId)
  }

  // TODO - zadanko
  // 1 - stworzyc metody w serwisie do pobierania konkretnego charakteru
  // 2 - wyswietlić dane zwrocone z api (stworzyc html)
  // 3 - zrobic aktywna nawigacje do kazdego z innych miejsc
  // 3* - przeniesc metode getIdByLink z componentu do zewnetrzenego pliku util
}
