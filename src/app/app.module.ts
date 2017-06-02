import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule,JsonpModule } from '@angular/http';
import { GameModule } from './game/game.module';
import { WeatherModule } from './weather/weather.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserModule,GameModule,AppRoutingModule,BrowserAnimationsModule,WeatherModule,
        HttpModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }