import { Component } from '@angular/core';
import * as mockData from './../../data/data.mock.json'

@Component({
  selector: 'app-characters-table',
  templateUrl: './characters-table.component.html',
  styleUrls: ['./characters-table.component.css']
})
export class CharactersTableComponent {
  mockData = mockData;
}
