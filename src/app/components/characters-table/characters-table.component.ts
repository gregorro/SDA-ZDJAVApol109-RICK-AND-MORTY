import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { CharactersResponse } from 'src/app/services/api/api.type';
import * as mockData from './../../data/data.mock.json'

@Component({
  selector: 'app-characters-table',
  templateUrl: './characters-table.component.html',
  styleUrls: ['./characters-table.component.css']
})
export class CharactersTableComponent implements OnInit {

  constructor(private apiService: ApiService){

  }
  mockData: CharactersResponse | null = null

  // metoda cyklu życia
  ngOnInit(): void {
    this.apiService.getCharacters().subscribe(data => {
      this.mockData = data
    })
  }

 // mockData: CharactersResponse = mockData as CharactersResponse;
  
 
}
