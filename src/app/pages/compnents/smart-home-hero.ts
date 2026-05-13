import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-smarthub-pro',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative min-h-screen bg-black overflow-hidden flex items-center justify-center px-4 py-12 md:py-20">
      <!-- Content Container -->
      <div class="relative z-10 text-center max-w-7xl mx-auto">
        <!-- Title -->
        <h2 class="text-3xl md:text-5xl lg:text-7xl font-semibold text-white mb-4 tracking-tight fade-in">
          SmartHub Pro
        </h2>
        <p class="text-base md:text-xl lg:text-3xl text-gray-300 mb-8 font-light fade-in" style="animation-delay: 0.2s;">
          Le cerveau de votre maison intelligente.
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16 fade-in" style="animation-delay: 0.4s;">
          <button class="bg-[#0071e3] hover:bg-[#0077ed] text-white px-6 py-2.5 rounded-full text-base font-medium transition-all duration-300 transform hover:scale-105">
            En savoir plus
          </button>
          <button class="border-2 border-[#0071e3] hover:bg-[#0071e3] text-[#0071e3] hover:text-white px-6 py-2.5 rounded-full text-base font-medium transition-all duration-300">
            Commander
          </button>
        </div>
        
        <!-- SmartHub Device -->
        <div class="relative w-full max-w-4xl mx-auto product-reveal">
          <!-- Hub visualization -->
          <div class="relative w-full aspect-[16/9] flex items-center justify-center">
            <!-- Main hub device -->
            <div class="relative w-3/4 md:w-2/3 lg:w-1/2 aspect-square">
              <!-- Hub body with gradient -->
              <div class="absolute inset-0 rounded-full bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#2563eb] shadow-2xl overflow-hidden">
                <!-- Subtle reflection -->
                <div class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-40"></div>
                
                <!-- Center screen/display -->
                <div class="absolute inset-[15%] rounded-full bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] shadow-inner">
                  <!-- Screen glow -->
                  <div class="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-transparent"></div>
                  
                  <!-- Central home icon -->
                  <div class="absolute inset-0 flex items-center justify-center">
                    <svg class="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-blue-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                    </svg>
                  </div>
                </div>
                
                <!-- Connection indicators (like camera module) -->
                <!-- Top - Lights control -->
                <div class="absolute top-[8%] left-1/2 transform -translate-x-1/2">
                  <div class="relative">
                    <div class="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 ring-2 ring-yellow-300/50 shadow-lg">
                      <div class="absolute inset-2 rounded-full bg-gradient-to-br from-yellow-300 to-amber-400 flex items-center justify-center">
                        <svg class="w-6 h-6 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>
                    </div>
                    <!-- Pulse effect -->
                    <div class="absolute inset-0 rounded-full bg-yellow-400 opacity-30 animate-ping"></div>
                  </div>
                </div>
                
                <!-- Right - Security -->
                <div class="absolute top-1/2 right-[8%] transform -translate-y-1/2">
                  <div class="relative">
                    <div class="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-red-500 to-rose-600 ring-2 ring-red-400/50 shadow-lg">
                      <div class="absolute inset-2 rounded-full bg-gradient-to-br from-red-400 to-rose-500 flex items-center justify-center">
                        <svg class="w-6 h-6 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                        </svg>
                      </div>
                    </div>
                    <!-- Pulse effect -->
                    <div class="absolute inset-0 rounded-full bg-red-500 opacity-30 animate-ping" style="animation-delay: 0.3s;"></div>
                  </div>
                </div>
                
                <!-- Bottom - Climate -->
                <div class="absolute bottom-[8%] left-1/2 transform -translate-x-1/2">
                  <div class="relative">
                    <div class="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 ring-2 ring-cyan-300/50 shadow-lg">
                      <div class="absolute inset-2 rounded-full bg-gradient-to-br from-cyan-300 to-teal-400 flex items-center justify-center">
                        <svg class="w-6 h-6 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                        </svg>
                      </div>
                    </div>
                    <!-- Pulse effect -->
                    <div class="absolute inset-0 rounded-full bg-cyan-400 opacity-30 animate-ping" style="animation-delay: 0.6s;"></div>
                  </div>
                </div>
                
                <!-- Left - Energy -->
                <div class="absolute top-1/2 left-[8%] transform -translate-y-1/2">
                  <div class="relative">
                    <div class="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 ring-2 ring-green-300/50 shadow-lg">
                      <div class="absolute inset-2 rounded-full bg-gradient-to-br from-green-300 to-emerald-400 flex items-center justify-center">
                        <svg class="w-6 h-6 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
                        </svg>
                      </div>
                    </div>
                    <!-- Pulse effect -->
                    <div class="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping" style="animation-delay: 0.9s;"></div>
                  </div>
                </div>
                
                <!-- Connection lines (subtle) -->
                <svg class="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
                  <line x1="50" y1="8" x2="50" y2="35" stroke="white" stroke-width="0.5" stroke-dasharray="2,2"/>
                  <line x1="92" y1="50" x2="65" y2="50" stroke="white" stroke-width="0.5" stroke-dasharray="2,2"/>
                  <line x1="50" y1="92" x2="50" y2="65" stroke="white" stroke-width="0.5" stroke-dasharray="2,2"/>
                  <line x1="8" y1="50" x2="35" y2="50" stroke="white" stroke-width="0.5" stroke-dasharray="2,2"/>
                </svg>
              </div>
              
              <!-- Hub shadow -->
              <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-4/5 h-12 bg-blue-600/40 blur-3xl rounded-full"></div>
            </div>
            
            <!-- Floating connection icons -->
            <div class="absolute top-[15%] right-[5%] animate-float" style="animation-delay: 0s;">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-purple-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-purple-400/30">
                <svg class="w-5 h-5 md:w-6 md:h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>
            </div>
            
            <div class="absolute bottom-[15%] right-[10%] animate-float" style="animation-delay: 0.5s;">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-pink-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-pink-400/30">
                <svg class="w-5 h-5 md:w-6 md:h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
              </div>
            </div>
            
            <div class="absolute top-[20%] left-[5%] animate-float" style="animation-delay: 1s;">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-indigo-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-indigo-400/30">
                <svg class="w-5 h-5 md:w-6 md:h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
                </svg>
              </div>
            </div>
            
            <div class="absolute bottom-[20%] left-[8%] animate-float" style="animation-delay: 1.5s;">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-orange-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-orange-400/30">
                <svg class="w-5 h-5 md:w-6 md:h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Feature highlights -->
        <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto fade-in" style="animation-delay: 1s;">
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-semibold text-white mb-2">100+</div>
            <div class="text-sm md:text-base text-gray-400">Appareils connectés</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-semibold text-white mb-2">5ms</div>
            <div class="text-sm md:text-base text-gray-400">Temps de réponse</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-semibold text-white mb-2">24/7</div>
            <div class="text-sm md:text-base text-gray-400">Disponibilité</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-semibold text-white mb-2">256-bit</div>
            <div class="text-sm md:text-base text-gray-400">Chiffrement</div>
          </div>
        </div>
      </div>
      
      <!-- Ambient glow -->
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-[#2563eb] opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  `,
  styles: [`
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes productReveal {
      from {
        opacity: 0;
        transform: scale(0.9) translateY(30px);
      }
      to {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }
    
    @keyframes float {
      0%, 100% {
        transform: translateY(0px) translateX(0px);
      }
      33% {
        transform: translateY(-10px) translateX(5px);
      }
      66% {
        transform: translateY(-5px) translateX(-5px);
      }
    }
    
    .fade-in {
      animation: fadeIn 1s ease-out forwards;
      opacity: 0;
    }
    
    .product-reveal {
      animation: productReveal 1.2s ease-out 0.6s forwards;
      opacity: 0;
    }
    
    .animate-float {
      animation: float 4s ease-in-out infinite;
    }
  `]
})
export class SmartHubProComponent {}