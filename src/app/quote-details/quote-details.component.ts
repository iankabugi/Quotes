import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
quotes = [
   new Quotes(1,'You can shoot a bird intentional but the bird cant poop on you intentionally','Clark',new Date(2018,1,12)),
   new Quotes(2,'You cant hide from your weakness','Clark',new Date(2018,1,12)),
   new Quotes(3,'The brave also have fears','Clark',new Date(2018,1,12)),

 ]
 addVote = 0;
 upVote(){
 this.addVote = this.addVote +1;
 }

 reduceVote = 0;
 downVote(){
   this.reduceVote = this.reduceVote +1;
 }


  constructor() { }

  ngOnInit() {
  }

}
