import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 quotes = [
    new Quotes(1,'You can shoot a bird intentional but the bird cant poop on you intentionally',
    new Quotes(2,'You cant hide from your weakness'),
    new Quotes(3,'The brave also have fears'),

  ]
  @Input() quote: Quote;
   plusQuote(quote){
     let quoteLength = this.quotes.length;
     this.quotes.push(quote);
   }

  constructor() { }

  ngOnInit() {
  }

}
