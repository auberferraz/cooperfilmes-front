import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoteiroService {
  apiUrl: string = "http://localhost:8080/client/roteiro"

  constructor(
    private httpClient: HttpClient
  ) { }

  sendMovieScript(name: string, email: string, phoneNumber: string, movieScript: string) {
    return this.httpClient.post(`${this.apiUrl}/send-movie-script`,
      { name, email, phoneNumber, movieScript });
  }
  
  consultMovieScript(email: string) {
    return this.httpClient.get(`${this.apiUrl}/consult-movie-script?email=${email}`);
  }

}
