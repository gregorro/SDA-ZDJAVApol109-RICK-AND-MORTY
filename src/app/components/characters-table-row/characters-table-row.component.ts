import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharacterDetails } from 'src/app/services/api/api.type';

export interface RowClickPayload {
  id: number;
  name: string;
}

@Component({
  selector: 'app-characters-table-row',
  templateUrl: './characters-table-row.component.html',
  styleUrls: ['./characters-table-row.component.css']
})
export class CharactersTableRowComponent {
  @Input('character') character!: CharacterDetails
  @Output('row-click') rowClick = new EventEmitter<RowClickPayload>()


  rowClicked(){
    this.rowClick.emit({
      name: this.character.name,
      id: this.character.id
    })
  }
}


