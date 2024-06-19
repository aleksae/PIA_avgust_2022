import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Rezutlat } from 'src/models/rezultat';
import { Takmicar } from 'src/models/takmicar';
import { ZajednickiService } from '../zajednicki.service';
import { Moderator } from 'src/models/moderator';

@Component({
  selector: 'app-takmicar',
  templateUrl: './takmicar.component.html',
  styleUrls: ['./takmicar.component.css']
})
export class TakmicarComponent implements OnInit {

  constructor(private router:Router, private zajednickiS:ZajednickiService) { }
 
  ulogovan:Takmicar = null
  rezultati:Array<Rezutlat> = []
  discipline:Array<String> = []
  let_rez_za_discipline:any = []
  kraj_fja:boolean =false
  gotove_discipline:String[] = []
  async ngOnInit(){
    //this.gotove_discipline.push("corak")
    this.ulogovan = JSON.parse(localStorage.getItem("takmicar"))  
    await this.zajednickiS.sve_rezultate_za_takmicara(this.ulogovan.broj).subscribe(async (res:Array<Rezutlat>)=>{
      this.rezultati =res
      let i=0;
      for(let r of this.rezultati){
        i++
        if(this.discipline.indexOf(r.disciplina)>=0) {}
        else {
          this.discipline.push(r.disciplina)
          this.let_rez_za_discipline.push([])
        }
        if(i==this.rezultati.length){
          await this.proveri_gotove()
          console.log(this.gotove_discipline)
          for(let p  of this.gotove_discipline){
            console.log("ispis iz petlje")
            console.log(p)
          }                
        }
      }
    })
    
  }

  async odredi_rangiranje(d:String){
    let tmp:Array<Rezutlat> = []
    console.log("pozvan za "+d)
      await this.zajednickiS.moderatori_za_disciplinu(d).subscribe(async (res:Moderator)=>{
        if(res){
          let tak = res.takmicari

          let i= -1;
          for(let t of res.takmicari){
           await this.zajednickiS.sve_rezultate_za_takmicara(t).subscribe((res:Array<Rezutlat>)=>{
              i++;
              for(let r of res){
                if(r.disciplina == d){
                  tmp.push(r)
                }
              }
              if(i==(tak.length-1)){
              }
            })
          }
        }
      })
      console.log("rang")
      console.log(tmp)
  

  }
  async proveri_gotove(){
    let cnt=-1;
    for(let d of this.discipline){
      cnt++
      let tmp:Array<Rezutlat> = []
      await this.zajednickiS.moderatori_za_disciplinu(d).subscribe(async (res:Moderator)=>{
        if(res) {
        let tak = res.takmicari
        let i= -1;
        for(let t of res.takmicari){
          await this.zajednickiS.sve_rezultate_za_takmicara(t).subscribe((res:Array<Rezutlat>)=>{
            i++;
            for(let r of res){
              if(r.disciplina == d){
                tmp.push(r)
              }
            }
            if(i==(tak.length-1)){
              if(tmp.length == (tak.length)*3){
                this.gotove_discipline.push(d)
                console.log(d + " je pushovan")
                console.log(this.gotove_discipline)
              } 
              if(cnt==(this.discipline.length-1)){
              }
            }
          })
        }
        }else{
          console.log("elsee")
        }
      })
    
    }
  }
  logout(){
    localStorage.removeItem("takmicar") 
    this.router.navigate([""])
  }

}
