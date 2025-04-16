import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserCardComponent } from './user-card/user-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-project';

  handleSelect(name: string) {
    alert(`You choose ${name}`);
  }
}
