import { Injectable } from '@angular/core';
import { Bikes } from './model/Bike';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  url :string;
  bikesArr : Bikes[];
  bike : Bikes;
  constructor(private http: HttpClient) { 
    this.url = "http://localhost:3004/bikes";
    this.bike = new Bikes();
    this.bikesArr = [];
  }

  insert(bike : Bikes){
    this.http.post<Bikes>(this.url,bike).subscribe();
    return "Bike Details Added"
  }
  deleteBikes(bId:number){
    this.http.delete<Bikes>(this.url+"/"+bId).subscribe();
    return "Bike Details Deleted"
  }
  update(bike:Bikes){
    this.http.put<Bikes>(this.url+"/"+bike.id,bike).subscribe();
    return "Bike Details Updated";
  }
  find(bId:number){
    this.http.get<Bikes>(this.url+"/"+bId).subscribe(data=> this.bike=data); 
    return this.bike;
  }

  findAll(){
    this.http.get<Bikes[]>(this.url).subscribe(data=> this.bikesArr=data); 
    return this.bikesArr;
  }
}
