import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { LangService } from './shared/services/lang.service';
import { ThemeService } from './shared/services/theme.service';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { SettingService } from './shared/services/setting.service';
import { SiteVisitService } from './shared/services/site-visit.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: "./app.component.html"
})
export class AppComponent {
  private lang = inject(LangService);
  private theme = inject(ThemeService);
  private settingService = inject(SettingService);
  private siteVisitService = inject(SiteVisitService);
  private router = inject(Router);

  whatsappLink$ = this.settingService.getWhatsappLink();

  constructor(){
    this.lang.init();
    this.theme.init();
    this.siteVisitService.trackVisit(this.router.url);
  }
}
