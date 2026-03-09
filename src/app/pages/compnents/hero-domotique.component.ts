// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';
// import { RouterLink } from "@angular/router";

// @Component({
//   selector: 'app-hero-domotique',
//   standalone: true,
//   imports: [CommonModule, TranslateModule, RouterLink],
//   template: `
// <section class="relative min-h-screen bg-gradient-to-br from-[#0a1628] via-[#132a45] to-[#1a3a5c] overflow-hidden flex items-center justify-center px-4 py-20">
  
//   <!-- Animated background elements - Smart home devices -->
//   <div class="absolute inset-0 overflow-hidden">
//     <!-- Floating smart devices icons -->
//     <div class="floating-icon" style="top: 15%; left: 10%; animation-delay: 0s;">
//       <div class="w-16 h-16 md:w-20 md:h-20 rounded-2xl border-2 border-blue-400/40 bg-blue-500/10 backdrop-blur-sm flex items-center justify-center">
//         <!-- SVG device icon -->
//       </div>
//     </div>
//     <div class="floating-icon" style="top: 25%; left: 25%; animation-delay: 0.8s;">
//       <div class="w-14 h-14 md:w-20 md:h-20 rounded-2xl border-2 border-green-400/40 bg-green-500/10 backdrop-blur-sm flex items-center justify-center">
//         <!-- SVG device icon -->
//       </div>
//     </div>
//     <div class="floating-icon" style="top: 35%; left: 75%; animation-delay: 1.2s;">
//       <div class="w-16 h-16 md:w-24 md:h-24 rounded-2xl border-2 border-purple-400/40 bg-purple-500/10 backdrop-blur-sm flex items-center justify-center">
//         <!-- SVG device icon -->
//       </div>
//     </div>
//     <div class="floating-icon" style="top: 60%; left: 15%; animation-delay: 1.5s;">
//       <div class="w-10 h-10 md:w-14 md:h-14 rounded-xl border-2 border-amber-400/40 bg-amber-500/10 backdrop-blur-sm flex items-center justify-center">
//         <!-- SVG device icon -->
//       </div>
//     </div>
//     <div class="floating-icon" style="top: 70%; left: 80%; animation-delay: 0.5s;">
//       <div class="w-12 h-12 md:w-18 md:h-18 rounded-xl border-2 border-red-400/40 bg-red-500/10 backdrop-blur-sm flex items-center justify-center">
//         <!-- SVG device icon -->
//       </div>
//     </div>
//     <div class="floating-icon" style="top: 20%; right: 15%; animation-delay: 2s;">
//       <div class="w-14 h-14 md:w-20 md:h-20 rounded-2xl border-2 border-cyan-400/40 bg-cyan-500/10 backdrop-blur-sm flex items-center justify-center">
//         <!-- SVG device icon -->
//       </div>
//     </div>

//     <!-- Sparkles -->
//     <div class="sparkle" style="top: 12%; left: 15%; animation-delay: 0.3s;">✦</div>
//     <div class="sparkle" style="top: 28%; right: 20%; animation-delay: 1.1s;">✦</div>
//     <div class="sparkle" style="top: 45%; left: 8%; animation-delay: 1.8s;">✦</div>
//     <div class="sparkle" style="top: 65%; right: 12%; animation-delay: 0.6s;">✦</div>
//     <div class="sparkle" style="bottom: 20%; left: 30%; animation-delay: 1.4s;">✦</div>
//     <div class="sparkle" style="bottom: 35%; right: 25%; animation-delay: 0.9s;">✦</div>

//     <!-- Small dots -->
//     <div class="dot" style="top: 10%; left: 35%; animation-delay: 0.4s;"></div>
//     <div class="dot" style="top: 40%; right: 30%; animation-delay: 1.3s;"></div>
//     <div class="dot" style="bottom: 25%; left: 20%; animation-delay: 0.7s;"></div>
//     <div class="dot" style="top: 55%; left: 70%; animation-delay: 1.6s;"></div>
//   </div>

//   <!-- Central glow -->
//   <div class="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//     <div class="smart-home-glow w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full"></div>
//   </div>

//   <!-- Content -->
//   <div class="relative z-20 text-center max-w-5xl mx-auto mt-20">
//     <h1 class="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 tracking-tight leading-tight">
//       {{ 'SmartHomeHub.HomeAutomation.title' | translate }}
//     </h1>

//     <p class="text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 font-light">
//       {{ 'SmartHomeHub.HomeAutomation.subtitle' | translate }}
//     </p>

//     <p class="text-base md:text-lg text-gray-400 mb-8 font-light">
//       {{ 'SmartHomeHub.HomeAutomation.description' | translate }}
//     </p>

//     <div class="flex flex-col sm:flex-row gap-4 justify-center">
//       <button class="bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 py-3 rounded-full text-base md:text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20">
//         {{ 'SmartHomeHub.HomeAutomation.buttonDiscover' | translate }}
//       </button>
//        <a href="" routerLink="/devis">
//       <button class="border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white px-8 py-3 rounded-full text-base md:text-lg font-medium transition-all duration-300">
//        {{ 'SmartHomeHub.HomeAutomation.buttonQuote' | translate }}
//       </button>
//         </a>
//     </div>
//   </div>

// </section>

//   `,
//   styles: [`
//     @keyframes float {
//       0%, 100% {
//         transform: translateY(0) rotate(0deg);
//       }
//       50% {
//         transform: translateY(-30px) rotate(5deg);
//       }
//     }
    
//     @keyframes sparkle {
//       0%, 100% {
//         opacity: 0.3;
//         transform: scale(0.8) rotate(0deg);
//       }
//       50% {
//         opacity: 1;
//         transform: scale(1.2) rotate(180deg);
//       }
//     }
    
//     @keyframes pulse {
//       0%, 100% {
//         opacity: 0.4;
//         transform: scale(1);
//       }
//       50% {
//         opacity: 0.8;
//         transform: scale(1.1);
//       }
//     }
    
//     .floating-icon {
//       position: absolute;
//       animation: float 6s ease-in-out infinite;
//     }
    
//     .sparkle {
//       position: absolute;
//       color: #60a5fa;
//       font-size: 1.5rem;
//       animation: sparkle 3s ease-in-out infinite;
//     }
    
//     .dot {
//       position: absolute;
//       width: 6px;
//       height: 6px;
//       background: linear-gradient(135deg, #60a5fa, #a78bfa);
//       border-radius: 50%;
//       animation: pulse 4s ease-in-out infinite;
//     }
    
//     .smart-home-glow {
//       background: linear-gradient(135deg, 
//         #3b82f6 0%, 
//         #8b5cf6 25%, 
//         #10b981 50%, 
//         #f59e0b 75%, 
//         #06b6d4 100%);
//       filter: blur(40px);
//       opacity: 0.6;
//       animation: pulse 4s ease-in-out infinite;
//     }
//   `]
// })
// export class HeroDomotiqueComponent {}
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';
// import { RouterLink } from "@angular/router";

// @Component({
//   selector: 'app-hero-domotique',
//   standalone: true,
//   imports: [CommonModule, TranslateModule, RouterLink],
//   template: `
// <section class="hero-section relative min-h-screen overflow-hidden flex items-center justify-center px-4 py-20">

//   <!-- Dot grid background (inspired by LONEED logo pattern) -->
//   <div class="dot-grid absolute inset-0 z-0"></div>

//   <!-- Animated background elements -->
//   <div class="absolute inset-0 overflow-hidden z-10">

//     <!-- Floating smart device cards -->
//     <div class="floating-icon" style="top: 14%; left: 8%; animation-delay: 0s;">
//       <div class="device-card">
//         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" stroke-width="1.5">
//           <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
//         </svg>
//       </div>
//     </div>

//     <div class="floating-icon" style="top: 22%; left: 22%; animation-delay: 0.8s;">
//       <div class="device-card device-card--sm">
//         <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" stroke-width="1.5">
//           <circle cx="12" cy="12" r="3"/>
//           <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
//         </svg>
//       </div>
//     </div>

//     <div class="floating-icon" style="top: 30%; right: 10%; animation-delay: 1.2s;">
//       <div class="device-card device-card--lg">
//         <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="1.5">
//           <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
//           <polyline points="9,22 9,12 15,12 15,22"/>
//         </svg>
//       </div>
//     </div>

//     <div class="floating-icon" style="top: 62%; left: 12%; animation-delay: 1.5s;">
//       <div class="device-card device-card--sm">
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" stroke-width="1.5">
//           <path d="M18.36 6.64a9 9 0 010 10.72M14.83 10.17a5 5 0 010 3.66M6.44 6.44a9 9 0 000 11.12M10.17 10.17a5 5 0 000 3.66M12 12h.01"/>
//         </svg>
//       </div>
//     </div>

//     <div class="floating-icon" style="top: 68%; right: 8%; animation-delay: 0.5s;">
//       <div class="device-card">
//         <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" stroke-width="1.5">
//           <rect x="2" y="3" width="20" height="14" rx="2"/>
//           <path d="M8 21h8M12 17v4"/>
//         </svg>
//       </div>
//     </div>

//     <div class="floating-icon" style="top: 18%; right: 22%; animation-delay: 2s;">
//       <div class="device-card device-card--sm">
//         <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#5eead4" stroke-width="1.5">
//           <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
//         </svg>
//       </div>
//     </div>

//     <!-- Sparkles teal -->
//     <div class="sparkle" style="top: 11%; left: 18%; animation-delay: 0.3s;">✦</div>
//     <div class="sparkle" style="top: 27%; right: 18%; animation-delay: 1.1s;">✦</div>
//     <div class="sparkle" style="top: 48%; left: 6%; animation-delay: 1.8s;">✦</div>
//     <div class="sparkle" style="top: 63%; right: 15%; animation-delay: 0.6s;">✦</div>
//     <div class="sparkle sparkle--sm" style="bottom: 22%; left: 32%; animation-delay: 1.4s;">◆</div>
//     <div class="sparkle sparkle--sm" style="bottom: 33%; right: 28%; animation-delay: 0.9s;">◆</div>

//     <!-- Dots -->
//     <div class="dot-anim" style="top: 10%; left: 38%; animation-delay: 0.4s;"></div>
//     <div class="dot-anim" style="top: 42%; right: 32%; animation-delay: 1.3s;"></div>
//     <div class="dot-anim dot-anim--lg" style="bottom: 28%; left: 22%; animation-delay: 0.7s;"></div>
//     <div class="dot-anim" style="top: 55%; left: 68%; animation-delay: 1.6s;"></div>

//     <!-- Connecting lines (network effect) -->
//     <svg class="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
//       <line x1="10%" y1="15%" x2="25%" y2="25%" stroke="#2dd4bf" stroke-width="1" stroke-dasharray="4 6"/>
//       <line x1="25%" y1="25%" x2="75%" y2="35%" stroke="#2dd4bf" stroke-width="1" stroke-dasharray="4 6"/>
//       <line x1="10%" y1="65%" x2="85%" y2="70%" stroke="#14b8a6" stroke-width="1" stroke-dasharray="4 6"/>
//       <line x1="78%" y1="20%" x2="90%" y2="65%" stroke="#0d9488" stroke-width="1" stroke-dasharray="4 6"/>
//     </svg>
//   </div>

//   <!-- Central glow LONEED teal -->
//   <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
//     <div class="loneed-glow w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full"></div>
//   </div>

//   <!-- Content -->
//   <div class="relative z-20 text-center max-w-5xl mx-auto mt-16">

//     <!-- Badge LONEED style -->
//     <div class="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full badge-loneed">
//       <span class="w-2 h-2 rounded-full bg-teal-400 animate-pulse inline-block"></span>
//       <span class="text-teal-300 text-sm font-medium tracking-widest uppercase">LONEED IT Solutions</span>
//     </div>

//     <h1 class="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 tracking-tight leading-tight">
//       {{ 'SmartHomeHub.HomeAutomation.title' | translate }}
//     </h1>

//     <p class="text-lg md:text-xl lg:text-2xl text-teal-200 mb-4 font-light">
//       {{ 'SmartHomeHub.HomeAutomation.subtitle' | translate }}
//     </p>

//     <p class="text-base md:text-lg text-slate-400 mb-10 font-light max-w-2xl mx-auto">
//       {{ 'SmartHomeHub.HomeAutomation.description' | translate }}
//     </p>

//     <div class="flex flex-col sm:flex-row gap-4 justify-center">
//       <button class="btn-primary">
//         {{ 'SmartHomeHub.HomeAutomation.buttonDiscover' | translate }}
//       </button>
//       <a routerLink="/devis">
//         <button class="btn-secondary">
//           {{ 'SmartHomeHub.HomeAutomation.buttonQuote' | translate }}
//         </button>
//       </a>
//     </div>

//     <!-- Stats row -->
//     <div class="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
//       <div class="stat-item">
//         <div class="text-2xl font-bold text-teal-300">500+</div>
//         <div class="text-xs text-slate-400 uppercase tracking-wider mt-1">Installations</div>
//       </div>
//       <div class="stat-item stat-item--center">
//         <div class="text-2xl font-bold text-teal-300">24/7</div>
//         <div class="text-xs text-slate-400 uppercase tracking-wider mt-1">Support</div>
//       </div>
//       <div class="stat-item">
//         <div class="text-2xl font-bold text-teal-300">99%</div>
//         <div class="text-xs text-slate-400 uppercase tracking-wider mt-1">Satisfaction</div>
//       </div>
//     </div>
//   </div>

// </section>
//   `,
//   styles: [`
//     /* ─── LONEED Color Palette ─────────────────────────────── */
//     :host {
//       --loneed-teal-dark:  #0a1f1f;
//       --loneed-teal-mid:   #0d2e2e;
//       --loneed-teal-base:  #0d9488;
//       --loneed-teal-light: #14b8a6;
//       --loneed-teal-bright:#2dd4bf;
//       --loneed-teal-pale:  #5eead4;
//     }

//     /* ─── Section background ───────────────────────────────── */
//     .hero-section {
//       background: linear-gradient(
//         135deg,
//         #050f0f 0%,
//         #071a1a 30%,
//         #0a2020 60%,
//         #0c2828 100%
//       );
//     }

//     /* ─── Dot grid inspired by LONEED logo ─────────────────── */
//     .dot-grid {
//       background-image: radial-gradient(circle, rgba(45,212,191,0.18) 1px, transparent 1px);
//       background-size: 32px 32px;
//       mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
//     }

//     /* ─── Floating device cards ────────────────────────────── */
//     .floating-icon {
//       position: absolute;
//       animation: float 6s ease-in-out infinite;
//     }

//     .device-card {
//       width: 64px;
//       height: 64px;
//       border-radius: 16px;
//       border: 1.5px solid rgba(45, 212, 191, 0.3);
//       background: rgba(13, 148, 136, 0.08);
//       backdrop-filter: blur(8px);
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       box-shadow: 0 4px 24px rgba(20, 184, 166, 0.12), inset 0 1px 0 rgba(45,212,191,0.15);
//       transition: border-color 0.3s;
//     }
//     .device-card:hover { border-color: rgba(45, 212, 191, 0.6); }
//     .device-card--sm { width: 48px; height: 48px; border-radius: 12px; }
//     .device-card--lg { width: 80px; height: 80px; border-radius: 20px; }

//     /* ─── Sparkles ─────────────────────────────────────────── */
//     .sparkle {
//       position: absolute;
//       color: var(--loneed-teal-bright);
//       font-size: 1.2rem;
//       animation: sparkle 3.5s ease-in-out infinite;
//       opacity: 0.6;
//     }
//     .sparkle--sm { font-size: 0.7rem; color: var(--loneed-teal-pale); }

//     /* ─── Animated dots ────────────────────────────────────── */
//     .dot-anim {
//       position: absolute;
//       width: 5px;
//       height: 5px;
//       background: var(--loneed-teal-bright);
//       border-radius: 50%;
//       animation: pulseDot 4s ease-in-out infinite;
//     }
//     .dot-anim--lg { width: 8px; height: 8px; }

//     /* ─── LONEED central glow ──────────────────────────────── */
//     .loneed-glow {
//       background: radial-gradient(circle,
//         rgba(20, 184, 166, 0.35) 0%,
//         rgba(13, 148, 136, 0.2) 40%,
//         transparent 70%
//       );
//       filter: blur(48px);
//       animation: pulseDot 5s ease-in-out infinite;
//     }

//     /* ─── Badge ────────────────────────────────────────────── */
//     .badge-loneed {
//       background: rgba(13, 148, 136, 0.12);
//       border: 1px solid rgba(45, 212, 191, 0.25);
//       backdrop-filter: blur(6px);
//     }

//     /* ─── Buttons ──────────────────────────────────────────── */
//     .btn-primary {
//       background: linear-gradient(135deg, var(--loneed-teal-base), var(--loneed-teal-light));
//       color: #fff;
//       padding: 0.75rem 2.25rem;
//       border-radius: 9999px;
//       font-size: 1rem;
//       font-weight: 500;
//       letter-spacing: 0.02em;
//       border: none;
//       cursor: pointer;
//       transition: all 0.3s ease;
//       box-shadow: 0 4px 20px rgba(13, 148, 136, 0.4);
//     }
//     .btn-primary:hover {
//       transform: translateY(-2px) scale(1.03);
//       box-shadow: 0 8px 32px rgba(20, 184, 166, 0.5);
//     }

//     .btn-secondary {
//       background: transparent;
//       color: var(--loneed-teal-pale);
//       padding: 0.75rem 2.25rem;
//       border-radius: 9999px;
//       font-size: 1rem;
//       font-weight: 500;
//       border: 1.5px solid rgba(45, 212, 191, 0.35);
//       cursor: pointer;
//       transition: all 0.3s ease;
//       width: 100%;
//     }
//     .btn-secondary:hover {
//       border-color: rgba(45, 212, 191, 0.7);
//       background: rgba(45, 212, 191, 0.07);
//       transform: translateY(-2px);
//     }

//     /* ─── Stats ────────────────────────────────────────────── */
//     .stat-item {
//       padding: 0.75rem;
//       text-align: center;
//     }
//     .stat-item--center {
//       border-left: 1px solid rgba(45, 212, 191, 0.15);
//       border-right: 1px solid rgba(45, 212, 191, 0.15);
//     }

//     /* ─── Keyframes ────────────────────────────────────────── */
//     @keyframes float {
//       0%, 100% { transform: translateY(0) rotate(0deg); }
//       50%       { transform: translateY(-22px) rotate(4deg); }
//     }

//     @keyframes sparkle {
//       0%, 100% { opacity: 0.3; transform: scale(0.8) rotate(0deg); }
//       50%       { opacity: 0.9; transform: scale(1.3) rotate(180deg); }
//     }

//     @keyframes pulseDot {
//       0%, 100% { opacity: 0.4; transform: scale(1); }
//       50%       { opacity: 0.9; transform: scale(1.15); }
//     }
//   `]
// })
// export class HeroDomotiqueComponent {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-hero-domotique',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  template: `
<section class="hero-section relative min-h-screen overflow-hidden flex items-center justify-center px-4 py-20">

  <!-- Dot grid background (inspired by LONEED logo pattern) -->
  <div class="dot-grid absolute inset-0 z-0"></div>

  <!-- Animated background elements -->
  <div class="absolute inset-0 overflow-hidden z-10">

    <!-- Floating smart device cards -->
    <div class="floating-icon" style="top: 14%; left: 8%; animation-delay: 0s;">
      <div class="device-card">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" stroke-width="1.5">
          <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
        </svg>
      </div>
    </div>

    <div class="floating-icon" style="top: 22%; left: 22%; animation-delay: 0.8s;">
      <div class="device-card device-card--sm">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" stroke-width="1.5">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
        </svg>
      </div>
    </div>

    <div class="floating-icon" style="top: 30%; right: 10%; animation-delay: 1.2s;">
      <div class="device-card device-card--lg">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="1.5">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
        </svg>
      </div>
    </div>

    <div class="floating-icon" style="top: 62%; left: 12%; animation-delay: 1.5s;">
      <div class="device-card device-card--sm">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" stroke-width="1.5">
          <path d="M18.36 6.64a9 9 0 010 10.72M14.83 10.17a5 5 0 010 3.66M6.44 6.44a9 9 0 000 11.12M10.17 10.17a5 5 0 000 3.66M12 12h.01"/>
        </svg>
      </div>
    </div>

    <div class="floating-icon" style="top: 68%; right: 8%; animation-delay: 0.5s;">
      <div class="device-card">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" stroke-width="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <path d="M8 21h8M12 17v4"/>
        </svg>
      </div>
    </div>

    <div class="floating-icon" style="top: 18%; right: 22%; animation-delay: 2s;">
      <div class="device-card device-card--sm">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#5eead4" stroke-width="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      </div>
    </div>

    <!-- Sparkles teal -->
    <div class="sparkle" style="top: 11%; left: 18%; animation-delay: 0.3s;">✦</div>
    <div class="sparkle" style="top: 27%; right: 18%; animation-delay: 1.1s;">✦</div>
    <div class="sparkle" style="top: 48%; left: 6%; animation-delay: 1.8s;">✦</div>
    <div class="sparkle" style="top: 63%; right: 15%; animation-delay: 0.6s;">✦</div>
    <div class="sparkle sparkle--sm" style="bottom: 22%; left: 32%; animation-delay: 1.4s;">◆</div>
    <div class="sparkle sparkle--sm" style="bottom: 33%; right: 28%; animation-delay: 0.9s;">◆</div>

    <!-- Dots -->
    <div class="dot-anim" style="top: 10%; left: 38%; animation-delay: 0.4s;"></div>
    <div class="dot-anim" style="top: 42%; right: 32%; animation-delay: 1.3s;"></div>
    <div class="dot-anim dot-anim--lg" style="bottom: 28%; left: 22%; animation-delay: 0.7s;"></div>
    <div class="dot-anim" style="top: 55%; left: 68%; animation-delay: 1.6s;"></div>

    <!-- Connecting lines (network effect) -->
    <svg class="absolute inset-0 w-full h-full opacity-15 dark:opacity-10" xmlns="http://www.w3.org/2000/svg">
      <line x1="10%" y1="15%" x2="25%" y2="25%" stroke="#0d9488" stroke-width="1" stroke-dasharray="4 6"/>
      <line x1="25%" y1="25%" x2="75%" y2="35%" stroke="#0d9488" stroke-width="1" stroke-dasharray="4 6"/>
      <line x1="10%" y1="65%" x2="85%" y2="70%" stroke="#14b8a6" stroke-width="1" stroke-dasharray="4 6"/>
      <line x1="78%" y1="20%" x2="90%" y2="65%" stroke="#0d9488" stroke-width="1" stroke-dasharray="4 6"/>
    </svg>
  </div>

  <!-- Central glow LONEED teal -->
  <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
    <div class="loneed-glow w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full"></div>
  </div>

  <!-- Content -->
  <div class="relative z-20 text-center max-w-5xl mx-auto mt-16">

    <!-- Badge LONEED style -->
    <div class="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full badge-loneed">
      <span class="w-2 h-2 rounded-full bg-teal-500 dark:bg-teal-400 animate-pulse inline-block"></span>
      <span class="text-teal-600 dark:text-teal-300 text-sm font-medium tracking-widest uppercase">LONEED IT Solutions</span>
    </div>

    <h1 class="text-4xl md:text-6xl lg:text-7xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
      {{ 'SmartHomeHub.HomeAutomation.title' | translate }}
    </h1>

    <p class="text-lg md:text-xl lg:text-2xl text-teal-700 dark:text-teal-200 mb-4 font-light">
      {{ 'SmartHomeHub.HomeAutomation.subtitle' | translate }}
    </p>

    <p class="text-base md:text-lg text-gray-500 dark:text-slate-400 mb-10 font-light max-w-2xl mx-auto">
      {{ 'SmartHomeHub.HomeAutomation.description' | translate }}
    </p>

    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <button class="btn-primary">
        {{ 'SmartHomeHub.HomeAutomation.buttonDiscover' | translate }}
      </button>
      <a routerLink="/devis">
        <button class="btn-secondary">
          {{ 'SmartHomeHub.HomeAutomation.buttonQuote' | translate }}
        </button>
      </a>
    </div>

    <!-- Stats row -->
    <div class="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
      <div class="stat-item">
      <div class="stat-value">500+</div>
        <div class="stat-label">Installations</div>
      </div>
      <div class="stat-item stat-item--center">
        <div class="stat-value">24/7</div>
        <div class="stat-label">Support</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">99%</div>
        <div class="stat-label">Satisfaction</div>
      </div>
    </div>
  </div>

</section>
  `,
  styles: [`
    /* ─── LONEED Color Palette ─────────────────────────────── */
    :host {
      --loneed-teal-dark:  #0a1f1f;
      --loneed-teal-mid:   #0d2e2e;
      --loneed-teal-base:  #0d9488;
      --loneed-teal-light: #14b8a6;
      --loneed-teal-bright:#2dd4bf;
      --loneed-teal-pale:  #5eead4;
    }

    /* ─── Section background ───────────────────────────────── */
    .hero-section {
      background: linear-gradient(160deg, #ffffff 0%, #f0fdfc 40%, #e6faf8 100%);
    }
    :host-context(.dark) .hero-section {
      background: linear-gradient(160deg, #050f0f 0%, #071a1a 40%, #0a2020 100%);
    }

    /* ─── Dot grid inspired by LONEED logo ─────────────────── */
    .dot-grid {
      background-image: radial-gradient(circle, rgba(13,148,136,0.2) 1.5px, transparent 1.5px);
      background-size: 32px 32px;
      mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
    }
    :host-context(.dark) .dot-grid {
      background-image: radial-gradient(circle, rgba(45,212,191,0.18) 1.5px, transparent 1.5px);
    }

    /* ─── Floating device cards ────────────────────────────── */
    .floating-icon {
      position: absolute;
      animation: float 6s ease-in-out infinite;
    }

    .device-card {
      width: 64px;
      height: 64px;
      border-radius: 16px;
      border: 1.5px solid rgba(13, 148, 136, 0.25);
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(8px);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 20px rgba(13, 148, 136, 0.1), 0 1px 3px rgba(0,0,0,0.06);
      transition: border-color 0.3s, box-shadow 0.3s;
    }
    :host-context(.dark) .device-card {
      background: rgba(13, 148, 136, 0.08);
      border-color: rgba(45, 212, 191, 0.3);
      box-shadow: 0 4px 24px rgba(20, 184, 166, 0.12), inset 0 1px 0 rgba(45,212,191,0.15);
    }
    .device-card:hover {
      border-color: rgba(13, 148, 136, 0.5);
      box-shadow: 0 8px 32px rgba(13, 148, 136, 0.18);
    }
    :host-context(.dark) .device-card:hover {
      border-color: rgba(45, 212, 191, 0.6);
    }
    .device-card--sm { width: 48px; height: 48px; border-radius: 12px; }
    .device-card--lg { width: 80px; height: 80px; border-radius: 20px; }

    /* ─── Sparkles ─────────────────────────────────────────── */
    .sparkle {
      position: absolute;
      color: var(--loneed-teal-base);
      font-size: 1.2rem;
      animation: sparkle 3.5s ease-in-out infinite;
      opacity: 0.4;
    }
    :host-context(.dark) .sparkle { color: var(--loneed-teal-bright); opacity: 0.6; }
    .sparkle--sm { font-size: 0.7rem; color: var(--loneed-teal-light); }

    /* ─── Animated dots ────────────────────────────────────── */
    .dot-anim {
      position: absolute;
      width: 5px;
      height: 5px;
      background: var(--loneed-teal-base);
      border-radius: 50%;
      animation: pulseDot 4s ease-in-out infinite;
      opacity: 0.5;
    }
    :host-context(.dark) .dot-anim { background: var(--loneed-teal-bright); opacity: 0.8; }
    .dot-anim--lg { width: 8px; height: 8px; }

    /* ─── LONEED central glow ──────────────────────────────── */
    .loneed-glow {
      background: radial-gradient(circle,
        rgba(13, 148, 136, 0.18) 0%,
        rgba(20, 184, 166, 0.1) 40%,
        transparent 70%
      );
      filter: blur(56px);
      animation: pulseDot 5s ease-in-out infinite;
    }
    :host-context(.dark) .loneed-glow {
      background: radial-gradient(circle,
        rgba(20, 184, 166, 0.35) 0%,
        rgba(13, 148, 136, 0.2) 40%,
        transparent 70%
      );
    }

    /* ─── Badge ────────────────────────────────────────────── */
    .badge-loneed {
      background: rgba(13, 148, 136, 0.08);
      border: 1px solid rgba(13, 148, 136, 0.2);
    }
    :host-context(.dark) .badge-loneed {
      background: rgba(13, 148, 136, 0.12);
      border-color: rgba(45, 212, 191, 0.25);
    }

    /* ─── Buttons ──────────────────────────────────────────── */
    .btn-primary {
      background: linear-gradient(135deg, var(--loneed-teal-base), var(--loneed-teal-light));
      color: #fff;
      padding: 0.75rem 2.25rem;
      border-radius: 9999px;
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: 0.02em;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 20px rgba(13, 148, 136, 0.35);
    }
    .btn-primary:hover {
      transform: translateY(-2px) scale(1.03);
      box-shadow: 0 8px 32px rgba(13, 148, 136, 0.45);
    }
    :host-context(.dark) .btn-primary {
      box-shadow: 0 4px 20px rgba(20, 184, 166, 0.4);
    }
    :host-context(.dark) .btn-primary:hover {
      box-shadow: 0 8px 32px rgba(45, 212, 191, 0.5);
    }

    .btn-secondary {
      background: transparent;
      color: var(--loneed-teal-base);
      padding: 0.75rem 2.25rem;
      border-radius: 9999px;
      font-size: 1rem;
      font-weight: 500;
      border: 1.5px solid rgba(13, 148, 136, 0.4);
      cursor: pointer;
      transition: all 0.3s ease;
      width: 100%;
    }
    .btn-secondary:hover {
      border-color: var(--loneed-teal-base);
      background: rgba(13, 148, 136, 0.06);
      transform: translateY(-2px);
    }
    :host-context(.dark) .btn-secondary {
      color: var(--loneed-teal-pale);
      border-color: rgba(45, 212, 191, 0.35);
    }
    :host-context(.dark) .btn-secondary:hover {
      border-color: rgba(45, 212, 191, 0.7);
      background: rgba(45, 212, 191, 0.07);
    }

    /* ─── Stats ────────────────────────────────────────────── */
    .stat-item { padding: 0.75rem; text-align: center; }
    .stat-value { color: var(--loneed-teal-base); font-size: 1.5rem; font-weight: 700; }
    :host-context(.dark) .stat-value { color: var(--loneed-teal-bright); }
    .stat-label { font-size: 0.7rem; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 0.25rem; }
    .stat-item--center {
      border-left: 1px solid rgba(13, 148, 136, 0.2);
      border-right: 1px solid rgba(13, 148, 136, 0.2);
    }
    :host-context(.dark) .stat-item--center {
      border-color: rgba(45, 212, 191, 0.15);
    }

    /* ─── Keyframes ────────────────────────────────────────── */
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50%       { transform: translateY(-22px) rotate(4deg); }
    }

    @keyframes sparkle {
      0%, 100% { opacity: 0.3; transform: scale(0.8) rotate(0deg); }
      50%       { opacity: 0.9; transform: scale(1.3) rotate(180deg); }
    }

    @keyframes pulseDot {
      0%, 100% { opacity: 0.4; transform: scale(1); }
      50%       { opacity: 0.9; transform: scale(1.15); }
    }
  `]
})
export class HeroDomotiqueComponent {}