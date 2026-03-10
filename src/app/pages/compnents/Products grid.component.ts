import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseService } from '../../core/services/base.service';

interface Product {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  bgColor: string;
  textColor: string;
}

@Component({
  selector: 'app-products-grid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="min-h-screen bg-white py-12 px-4">
      <div class="max-w-7xl mx-auto">
        <!-- Products Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Gift Card -->
          <div class="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.02] min-h-[400px] md:min-h-[500px] flex flex-col justify-between p-8 md:p-12">
            <div class="text-center">
              <!-- Apple logo with gradient -->
              <div class="mb-6 flex justify-center">
                <div class="w-20 h-20 md:w-24 md:h-24 relative">
                  <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#4facfe] via-[#f093fb] to-[#feca57] flex items-center justify-center">
                    <div class="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" class="w-full h-full text-white" fill="currentColor">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                      </svg>
                    </div>
                    <!-- Decorative asterisk -->
                    <div class="absolute top-2 right-2 text-white text-2xl">✱</div>
                  </div>
                </div>
              </div>
              <h3 class="text-2xl md:text-3xl font-semibold text-black mb-2">Give something special.</h3>
              <p class="text-base md:text-lg text-gray-700 mb-6">Find what they've been waiting for all year.</p>
              <button class="bg-[#0071e3] hover:bg-[#0077ed] text-white px-6 py-2.5 rounded-full text-base font-medium transition-all duration-300 inline-block">
                Shop gifts
              </button>
            </div>
          </div>

          <!-- AirPods Pro 3 -->
          <div class="relative bg-white rounded-3xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.02] min-h-[400px] md:min-h-[500px] flex flex-col justify-between p-8 md:p-12">
            <div class="text-center mb-8">
              <h3 class="text-2xl md:text-3xl font-semibold text-black mb-2">AirPods Pro 3</h3>
              <p class="text-base md:text-lg text-gray-700 mb-2">The world's best in-ear</p>
              <p class="text-base md:text-lg text-gray-700 mb-6">Active Noise Cancellation.</p>
              <div class="flex flex-col sm:flex-row gap-3 justify-center">
                <button class="bg-[#0071e3] hover:bg-[#0077ed] text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300">
                  Learn more
                </button>
                <button class="border-2 border-[#0071e3] hover:bg-[#0071e3] text-[#0071e3] hover:text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300">
                  Buy
                </button>
              </div>
            </div>
            
            <!-- AirPods Image -->
            <div class="flex justify-center items-end mt-auto">
              <div class="relative w-48 md:w-64 h-48 md:h-64">
                <!-- Left AirPod -->
                <div class="absolute bottom-0 left-8 w-12 md:w-16 h-32 md:h-40 bg-gradient-to-b from-white to-gray-100 rounded-full shadow-xl transform rotate-[-15deg]">
                  <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-6 md:w-8 h-6 md:h-8 bg-gradient-to-br from-gray-800 to-black rounded-full"></div>
                  <div class="absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-20 md:h-24 bg-gradient-to-b from-gray-100 to-white rounded-full"></div>
                </div>
                
                <!-- Right AirPod -->
                <div class="absolute bottom-0 right-8 w-12 md:w-16 h-32 md:h-40 bg-gradient-to-b from-white to-gray-100 rounded-full shadow-xl transform rotate-[15deg]">
                  <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-6 md:w-8 h-6 md:h-8 bg-gradient-to-br from-gray-800 to-black rounded-full"></div>
                  <div class="absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-20 md:h-24 bg-gradient-to-b from-gray-100 to-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- iPad Air -->
          <div class="relative bg-gradient-to-br from-[#b8e6f5] to-[#8dd3e8] rounded-3xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.02] min-h-[400px] md:min-h-[500px] flex flex-col justify-between p-8 md:p-12">
            <div class="text-center mb-8">
              <h3 class="text-2xl md:text-3xl font-semibold text-black mb-2">
                iPad <span class="font-light italic">air</span>
              </h3>
              <p class="text-base md:text-lg text-gray-800 mb-6">Now supercharged by the M3 chip.</p>
              <div class="flex flex-col sm:flex-row gap-3 justify-center">
                <button class="bg-[#0071e3] hover:bg-[#0077ed] text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300">
                  Learn more
                </button>
                <button class="border-2 border-[#0071e3] hover:bg-[#0071e3] text-[#0071e3] hover:text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300">
                  Buy
                </button>
              </div>
            </div>
            
            <!-- iPad Stack -->
            <div class="flex justify-center items-end mt-auto">
              <div class="relative w-48 md:w-64 h-32 md:h-40">
                <!-- Back iPad -->
                <div class="absolute bottom-4 right-4 w-32 md:w-40 h-24 md:h-32 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg shadow-2xl transform rotate-[-5deg]"></div>
                
                <!-- Middle iPad -->
                <div class="absolute bottom-2 right-8 w-32 md:w-40 h-24 md:h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg shadow-2xl transform rotate-[2deg]"></div>
                
                <!-- Front iPad -->
                <div class="absolute bottom-0 left-0 w-36 md:w-48 h-28 md:h-36 bg-gradient-to-br from-[#5eb8d9] to-[#4a9bb8] rounded-xl shadow-2xl transform rotate-[-8deg]">
                  <div class="absolute inset-2 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Apple Watch Series 11 -->
          <div class="relative bg-white rounded-3xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.02] min-h-[400px] md:min-h-[500px] flex flex-col justify-between p-8 md:p-12">
            <div class="text-center mb-8">
              <h3 class="text-2xl md:text-3xl font-semibold text-black mb-2 flex items-center justify-center gap-2">
                <svg viewBox="0 0 24 24" class="w-6 h-6" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                WATCH SERIES 11
              </h3>
              <p class="text-base md:text-lg text-gray-700 mb-6">The ultimate way to watch your health.</p>
              <div class="flex flex-col sm:flex-row gap-3 justify-center">
                <button class="bg-[#0071e3] hover:bg-[#0077ed] text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300">
                  Learn more
                </button>
                <button class="border-2 border-[#0071e3] hover:bg-[#0071e3] text-[#0071e3] hover:text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300">
                  Buy
                </button>
              </div>
            </div>
            
            <!-- Apple Watch Image -->
            <div class="flex justify-center items-end mt-auto">
              <div class="relative w-48 md:w-64 h-48 md:h-64">
                <!-- Watch case -->
                <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-32 md:w-40 h-40 md:h-48 bg-gradient-to-br from-[#e8c4a8] via-[#d4a88a] to-[#c49b7a] rounded-[2.5rem] shadow-2xl">
                  <!-- Screen -->
                  <div class="absolute inset-3 bg-black rounded-[2rem] overflow-hidden">
                    <!-- Activity rings -->
                    <div class="absolute inset-0 flex items-center justify-center">
                      <div class="relative w-24 h-24">
                        <svg viewBox="0 0 100 100" class="w-full h-full transform -rotate-90">
                          <!-- Outer ring -->
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#FF3B30" stroke-width="6" stroke-dasharray="200 51" class="opacity-90"/>
                          <!-- Middle ring -->
                          <circle cx="50" cy="50" r="30" fill="none" stroke="#00E5A0" stroke-width="6" stroke-dasharray="150 38" class="opacity-90"/>
                          <!-- Inner ring -->
                          <circle cx="50" cy="50" r="20" fill="none" stroke="#0A84FF" stroke-width="6" stroke-dasharray="100 25" class="opacity-90"/>
                        </svg>
                      </div>
                    </div>
                    <!-- Time display -->
                    <div class="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-xs">19:34</div>
                  </div>
                  
                  <!-- Digital Crown -->
                  <div class="absolute right-0 top-1/4 w-4 h-12 bg-gradient-to-r from-[#c49b7a] to-[#a87d5f] rounded-r-lg"></div>
                  
                  <!-- Side button -->
                  <div class="absolute right-0 bottom-1/3 w-3 h-8 bg-gradient-to-r from-[#c49b7a] to-[#a87d5f] rounded-r-lg"></div>
                </div>
                
                <!-- Watch band (top) -->
                <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-b from-[#f5e6d8] to-[#e8c4a8] rounded-t-full"></div>
                
                <!-- Watch band (bottom) -->
                <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 md:w-24 h-12 md:h-16 bg-gradient-to-b from-[#e8c4a8] to-[#f5e6d8] rounded-b-3xl"></div>
              </div>
            </div>
          </div>

          <!-- Trade In Section -->
          <div class="relative bg-white rounded-3xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.02] min-h-[400px] md:min-h-[500px] flex flex-col justify-between p-8 md:p-12 md:col-span-2">
            <div class="grid md:grid-cols-2 gap-8 h-full">
              <!-- Left: Carrier Deals -->
              <div class="text-center flex flex-col justify-center">
                <h3 class="text-2xl md:text-3xl font-semibold text-black mb-3">Any condition</h3>
                <h4 class="text-xl md:text-2xl font-semibold text-black mb-4">carrier deals are here.</h4>
                <p class="text-sm md:text-base text-gray-700 mb-2">Select carriers accept eligible trade-in devices</p>
                <p class="text-sm md:text-base text-gray-700 mb-6">in any condition. Other offers available.<sup>2</sup></p>
                <div>
                  <button class="bg-[#0071e3] hover:bg-[#0077ed] text-white px-6 py-2.5 rounded-full text-base font-medium transition-all duration-300 inline-block">
                    Find your deal
                  </button>
                </div>
                
                <!-- Device icons -->
                <div class="flex justify-center gap-6 mt-8">
                  <div class="w-16 h-20 bg-gradient-to-b from-gray-300 to-gray-400 rounded-xl shadow-lg"></div>
                  <div class="w-16 h-20 bg-gradient-to-b from-gray-200 to-gray-300 rounded-xl shadow-lg"></div>
                  <div class="w-16 h-20 bg-gradient-to-b from-gray-100 to-gray-200 rounded-xl shadow-lg"></div>
                </div>
              </div>
              
              <!-- Right: Trade In -->
              <div class="text-center flex flex-col justify-center">
                <h3 class="text-2xl md:text-3xl font-semibold text-black mb-3 flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" class="w-6 h-6" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  Trade In
                </h3>
                <h4 class="text-xl md:text-2xl font-semibold text-black mb-4">Get up to $180–$670</h4>
                <p class="text-sm md:text-base text-gray-700 mb-2">in credit when you trade in</p>
                <p class="text-sm md:text-base text-gray-700 mb-6">iPhone 13 or higher.<sup>3</sup></p>
                <div>
                  <button class="bg-[#0071e3] hover:bg-[#0077ed] text-white px-6 py-2.5 rounded-full text-base font-medium transition-all duration-300 inline-block">
                    Get your estimate
                  </button>
                </div>
                
                <!-- Trade in visualization -->
                <div class="flex justify-center items-center gap-4 mt-8">
                  <div class="relative">
                    <div class="w-20 h-28 bg-gradient-to-br from-[#4a9bb8] to-[#3a7a8f] rounded-2xl shadow-xl">
                      <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-blue-300 to-blue-400"></div>
                    </div>
                  </div>
                  <div class="text-3xl text-gray-400">→</div>
                  <div class="w-20 h-28 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl relative overflow-hidden">
                    <div class="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                      <div class="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  `]
})
export class ProductsGridComponent {

  datas:any[] = [];
  loadData: boolean = false;
  isLoading: boolean = false;
  pageSize: number = 10;
  pageIndex: number = 0;
  offset: number = 0;
  private baseService = inject(BaseService);



  //   getQuartier(page,size) {
  //   this.loadData = true;
  //   return this.baseService.list('geolocation/quartiers', page, size).subscribe({
  //     next:(response: any) => {
  //       if (response['success']) {    
  //         const data = response['data']['content'] || [];
  //         this.loadData = false;
  //         this.dataSource = new MatTableDataSource(data);
  //         this.dataSource.paginator = this.paginator;
  //         this.dataSource.sort = this.sort;
  //         this.datas = data;
  //         this.length = data["totalElements"] || data['content'].length;
  //         this._changeDetectorRef.markForCheck();
  //       } else {
  //         this.loadData = false;
  //         this.dataSource = new MatTableDataSource();
  //       }
  //     },
  //     error:(err) => {
  //       console.log(err);
  //     }
  //   })
  // }
}