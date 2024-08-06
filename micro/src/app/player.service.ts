import { Injectable } from '@angular/core';
import { Players } from './addplayers/model/Players';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  url :string;
  playerArr : Players[];
  player : Players;
  constructor(private http: HttpClient) { 
    this.url = "http://localhost:3006/Parked_Cars";
    this.player = new Players();
    this.playerArr = [];
  } 
  insert(player : Players){
    this.http.post<Players>(this.url,player).subscribe();
    return "Car Parking Slot Alloted"
  }
  deleteplayer(plate:number){
    this.http.delete<Players>(this.url+"/"+plate).subscribe();
    return "Parked Details Deleted."
  }
  update(player:Players){
    this.http.put<Players>(this.url+"/"+player.plate,player).subscribe();
    return "Parked Car Details Updated";
  }
  find(plate:number){
    this.http.get<Players>(this.url+"/"+plate).subscribe(data=> this.player=data); 
    return this.player;
  }
  findAll(){
    this.http.get<Players[]>(this.url).subscribe(data=> this.playerArr=data); 
    return this.playerArr;
  }
}
