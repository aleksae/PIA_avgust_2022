import { Component, OnInit } from '@angular/core';
import { Moderator } from 'src/models/moderator';
import { Takmicar } from 'src/models/takmicar';

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.css']
})
export class ModeratorComponent implements OnInit {

  constructor() { }

  ulogovan:Moderator = null
  ngOnInit(): void {
    this.ulogovan = JSON.parse(localStorage.getItem("moderator"))
  }
  logout(){
    localStorage.removeItem("moderator")
  }

}
