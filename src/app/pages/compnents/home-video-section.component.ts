import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SettingService } from '../../shared/services/setting.service';

@Component({
  selector: 'app-home-video-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
<section *ngIf="loading || embedUrl" class="relative bg-black overflow-hidden transition-colors duration-300 flex flex-col items-center px-4 py-10 md:py-16">

  <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

  <!-- Background glow -->
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px]
              bg-[#0097A7]/5 rounded-full blur-3xl pointer-events-none">
            </div>

  <!-- Header -->
  <div class="relative z-10 max-w-3xl mx-auto px-6 text-center mb-6 md:mb-8 flex-shrink-0">
    <p class="text-xs font-semibold tracking-[0.2em] uppercase text-[#0097A7] mb-4">
      {{ 'HomeVideo.badge' | translate }}
    </p>
    <h2 class="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
      {{ 'HomeVideo.title' | translate }}
    </h2>
  </div>

  <!-- Player -->
  <div class="relative z-10 w-full max-w-6xl mx-auto px-6">
    <div class="relative w-full aspect-video mx-auto rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl shadow-black/40">
      <div *ngIf="loading" class="absolute inset-0 bg-zinc-800 animate-pulse"></div>
      <iframe
        *ngIf="!loading && embedUrl"
        class="absolute inset-0 w-full h-full"
        [src]="embedUrl"
        [title]="'HomeVideo.iframeTitle' | translate"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        loading="lazy">
      </iframe>
    </div>
  </div>

  <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
</section>
  `,
  styles: [``]
})
export class HomeVideoSectionComponent implements OnInit {

  embedUrl: SafeResourceUrl | null = null;
  loading = true;

  private settingService = inject(SettingService);
  private sanitizer = inject(DomSanitizer);
  private _changeDetectorRef = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.settingService.getSettings().subscribe({
      next: (settings) => {
        const videoId = this.extractYoutubeId(this.settingService.getText(settings, 'home_video_url'));
        if (videoId) {
          this.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            `https://www.youtube-nocookie.com/embed/${videoId}`
          );
        }
        this.loading = false;
        this._changeDetectorRef.markForCheck();
      },
      error: () => {
        this.loading = false;
        this._changeDetectorRef.markForCheck();
      }
    });
  }

  private extractYoutubeId(url: string | null | undefined): string | null {
    if (!url) return null;

    const patterns = [
      /(?:youtube\.com\/watch\?v=)([\w-]{11})/,
      /(?:youtube\.com\/embed\/)([\w-]{11})/,
      /(?:youtube\.com\/shorts\/)([\w-]{11})/,
      /(?:youtu\.be\/)([\w-]{11})/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }

    return null;
  }
}
