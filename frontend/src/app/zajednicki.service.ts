import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZajednickiService {

  constructor(private http:HttpClient) { }

  login_takmicar(br, lozinka){
    const data={
      broj:br,
      lozinka:lozinka
    }
    return this.http.post("http://localhost:4000/takmicar/login", data)
  }
  login_moderator(ki, lozinka){
    const data={
      korisnicko_ime:ki,
      lozinka:lozinka
    }
    return this.http.post("http://localhost:4000/moderator/login", data)
  }
  sve_rezultate_za_takmicara(broj){
    const data={
      takmicar_broj:broj
    }
    return this.http.post("http://localhost:4000/rezultat/dohvati_sve_za_takmicara", data)
  }
  moderatori_za_disciplinu(disc){
    const data={
      disciplina:disc
    }
    return this.http.post("http://localhost:4000/moderator/dohvati_za_disciplinu", data)
  }
} 
