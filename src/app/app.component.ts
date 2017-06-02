import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}
    <nav>
    <a routerLink="game"  routerLinkActive="active">Game</a>
    <a routerLink="weather"  routerLinkActive="active">Weather</a>
  </nav>
    </h1><router-outlet></router-outlet>`
})
export class AppComponent {
    title = 'Time waits for no man.';
}