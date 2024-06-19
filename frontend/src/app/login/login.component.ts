import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZajednickiService } from '../zajednicki.service';
import { Moderator } from 'src/models/moderator';
import { Takmicar } from 'src/models/takmicar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private zajednickiServis:ZajednickiService) { }

  ngOnInit(): void {

  }
  tip:string;
  k_ime:string;
  lozinka:string;
  greska:string;

  login(){
    if(!this.k_ime || !this.lozinka || !this.tip){
      this.greska="Popunite sva polja!"
      return;
    }
    if(this.tip=="moderator"){
      console.log("mod")
      this.zajednickiServis.login_moderator(this.k_ime, this.lozinka).subscribe((res:Moderator)=>{
        if(res){
          localStorage.setItem("moderator", JSON.stringify(res))
          this.router.navigate(['moderator'])
        }else{
          this.greska="Lose uneti podaci!"
        }
      })
    }else{
      //takmicar
      console.log("tak")
      this.zajednickiServis.login_takmicar(this.k_ime, this.lozinka).subscribe((res:Takmicar)=>{
        if(res){
          localStorage.setItem("takmicar", JSON.stringify(res))
          this.router.navigate(['takmicar'])
        }else{
          this.greska="Lose uneti podaci!"
        }
      })

    }

  }

}
