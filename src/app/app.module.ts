
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesFormComponent } from './quote-form/quote-form.component';

@NgModule({
 declarations: [
   AppComponent,
   QuotesFormComponent,
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
