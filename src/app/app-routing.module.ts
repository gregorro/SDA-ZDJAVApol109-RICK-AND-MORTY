import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersTableComponent } from './components/characters-table/characters-table.component';

const routes: Routes = [
  {
    path: 'characters', component: CharactersTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
