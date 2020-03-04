import { Component, OnInit, Input } from '@angular/core';
import  *  as  data  from  '../data.json';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

  constructor() { }
  details: any = (data as any).default;
  info:any=[];
  //public show =new BehaviorSubject<boolean>(false);
  //@Input() show:boolean=false;



  ngOnInit() {
    this.
    info=this.details;
    }
   // onClick(){
     // this.show.next(true);
    //}
  

}
