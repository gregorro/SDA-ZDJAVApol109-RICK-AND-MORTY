import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { NotFoundComponent } from './components/not-found/not-found.component';
import { CharacterDetailsComponent } from './components/characters/character-details/character-details.component';
import { CharactersTableComponent } from './components/characters/characters-table/characters-table.component';
import { EpisodeDetailsComponent } from './components/episodes/episode-details/episode-details.component';
import { EpisodesTableComponent } from './components/episodes/episodes-table/episodes-table.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LocationDetailsComponent } from './components/locations/location-details/location-details.component';
import { LocationsTableComponent } from './components/locations/locations-table/locations-table.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},

  { path: 'characters', component: CharactersTableComponent },
  { path: 'characters/:id', component: CharacterDetailsComponent },

  { path: 'locations', component: LocationsTableComponent },
  { path: 'locations/:id', component: LocationDetailsComponent },

  { path: 'episodes', component: EpisodesTableComponent },
  { path: 'episodes/:id', component: EpisodeDetailsComponent },

  {path: '**', redirectTo: '/'}
  // {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
