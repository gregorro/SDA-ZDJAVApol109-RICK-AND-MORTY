import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharactersResponse } from './api.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = `https://rickandmortyapi.com/api`

  public getCharacters(): Observable<CharactersResponse>{
    return this.http.get<CharactersResponse>(`${this.baseUrl}/character`)
  }
}
