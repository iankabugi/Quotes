import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 quotes = [
    new Quotes(1,'You can shoot a bird intentional but the bird cant poop on you intentionally','BUGi',new Date(2018,3,14)),
    new Quotes(2,'You cant hide from your weakness','mike',new Date(2018,6,9)),
    new Quotes(3,'The brave also have fears','Clark',new Date(2018,1,12) ),

  ]
 addNewQuotes(quote){
  let quoteLength=this.quotes.length;
  quote.id=quoteLength+1;
  this.quotes.push(quote);
   }
 
  constructor() { }

  ngOnInit() {
  }

}
