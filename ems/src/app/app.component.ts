import { Component } from '@angular/core';
import { Bikes } from './model/Bike';
import { BikeService } from './bike.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {  
  bike : Bikes ;
  result : string
  bikeArr : Bikes[];
  flag:boolean=false;

   constructor(private service : BikeService){
    this.bike = new Bikes();
    this.result = "";
    this.bikeArr =[];
    this.flag = false;
   }

 insert(data : any) {
  this.bike.id = data.bId;
  this.bike.bName = data.bName;
  this.bike.blicenseno = data.blicenseno;
  this.bike.bmobileno = data.bmobileno;
  this.bike.bmodel = data.bmodel;
  this.result=this.service.insert(this.bike);
 }
 update(data:any){
  this.bike.id = data.bId;
  this.bike.bName = data.bName;
  this.bike.blicenseno = data.blicenseno;
  this.bike.bmobileno = data.bmobileno;
  this.bike.bmodel = data.bmodel;

  this.result=this.service.update(this.bike);
 }
 deleteBikes(data:any){
  this.result=this.service.deleteBikes(data.bId);
 }
 find(data:any){
  this.bike=this.service.find(data.bId);
  this.result=this.bike.id+" "+this.bike.bName+" "+this.bike.blicenseno+""+this.bike.bmobileno+""+this.bike.bmodel;
 }
 findAll(){
  this.bikeArr=this.service.findAll();
  this.flag=true;
 }
  
}