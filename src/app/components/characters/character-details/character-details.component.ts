import { Component } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent {
  characterId: number;

  constructor(private router: ActivatedRoute){
    this.characterId = this.router.snapshot.params['id']
  }
}
