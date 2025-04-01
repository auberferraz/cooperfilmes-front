import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRoteiroService {
  private apiUrl: string = "http://localhost:8080/user/roteiro"

  constructor(
    private httpClient: HttpClient
  ) { }
  
  getMovieScriptById(id: string) {
    return this.httpClient.get(`${this.apiUrl}?id=${id}`);
  }

  getAllMovieScript() {
    return this.httpClient.get(`${this.apiUrl}/consult-all-movie-script`);
  }

  setNextStatus(id: number) {
    return this.httpClient.post(`${this.apiUrl}/set-next-status`, { id });
  }

}
