import { Component } from '@angular/core';
import { MainComponent } from "./shared/main/main.component";
import { HeaderComponent } from "./shared/header/header.component";

@Component({
  selector: 'app-root',
  imports: [MainComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'riftbound-counter';
}
