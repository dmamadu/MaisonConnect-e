import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LangService } from './shared/services/lang.service';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  private lang = inject(LangService);
  private theme = inject(ThemeService);
  constructor(){
    this.lang.init();
    this.theme.init();
  }
}
