
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesFormComponent } from './quote-form/quote-form.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
 declarations: [
   AppComponent,
   QuotesFormComponent,
   QuoteComponent,
   QuoteDetailsComponent,
   HighlightDirective,
   DateCountPipe
   ],

 imports: [
   BrowserModule,
   AppRoutingModule,
   FormsModule,
 ],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule {}
