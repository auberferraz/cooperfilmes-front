import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoteiroService {
  apiUrl: string = "http://localhost:8080/roteiro"

  constructor(
    private httpClient: HttpClient
  ) { }

  login(name: string, email: string, phoneNumber: string, movieScript: string) {
    return this.httpClient.post(`${this.apiUrl}/send-movie-script`,
      {
        name,
        email,
        phoneNumber,
        movieScript
      });
  }

}
