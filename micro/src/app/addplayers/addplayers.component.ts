import { Component } from '@angular/core';
import { Players } from './model/Players';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-addplayers',
  templateUrl: './addplayers.component.html',
  styleUrls: ['./addplayers.component.css']
})
export class AddplayersComponent {  
  player : Players ;
  result : string
  playerArr : Players[];
  flag:boolean=false;

  constructor(private service : PlayerService){
    this.player = new Players();
    this.result = "";
    this.playerArr =[];
  }

 insert(data : any) {
  this.player.plate = data.plate;
  this.player.namecus = data.namecus;
  this.player.parkdur = data.parkdur;
  this.player.coc = data.coc;
  this.player.phno = data.phno;
  this.result=this.service.insert(this.player);
 }
 update(data:any){
  this.player.plate = data.plate;
  this.player.namecus = data.namecus;
  this.player.parkdur = data.parkdur;
  this.player.coc = data.coc;
  this.player.phno = data.phno;
  this.result=this.service.update(this.player);
 }
 deleteplayer(data:any){
  this.result=this.service.deleteplayer(data.plate);
 }
 find(data:any){
  this.player=this.service.find(data.plate);
  this.result=this.player.plate+" "+this.player.namecus+" "+this.player.parkdur+" "+this.player.coc+" "+this.player.phno;
 }
 findAll() {
  this.playerArr=this.service.findAll();
  this.flag=true;
 }
}
