import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersTableComponent } from './components/characters/characters-table/characters-table.component';
import { CharactersTableRowComponent } from './components/characters/characters-table-row/characters-table-row.component'
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CharacterDetailsComponent } from './components/characters/character-details/character-details.component';
import { LocationDetailsComponent } from './components/locations/location-details/location-details.component';
import { LocationsTableComponent } from './components/locations/locations-table/locations-table.component';
import { LocationsTableRowComponent } from './components/locations/locations-table-row/locations-table-row.component';
import { EpisodesTableRowComponent } from './components/episodes/episodes-table-row/episodes-table-row.component';
import { EpisodesTableComponent } from './components/episodes/episodes-table/episodes-table.component';
import { EpisodeDetailsComponent } from './components/episodes/episode-details/episode-details.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CharactersTableComponent,
    CharactersTableRowComponent,
    FooterComponent,
    HeaderComponent,
    CharacterDetailsComponent,
    LocationDetailsComponent,
    LocationsTableComponent,
    LocationsTableRowComponent,
    EpisodesTableRowComponent,
    EpisodesTableComponent,
    EpisodeDetailsComponent,
    NavigationComponent,
    HomePageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
