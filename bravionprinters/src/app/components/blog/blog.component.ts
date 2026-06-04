// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-blog',
//   standalone: true,
//   imports: [CommonModule],
//   template: `
//     <div class="pt-24 pb-16 px-8 md:px-16 bg-[#f5f5f3] text-[#0a0a0a] min-h-screen">
//       <div class="max-w-7xl mx-auto">
//         <div class="text-center mb-16">
//           <h1 class="text-4xl md:text-6xl font-heading font-bold mb-4">BLOG & <span class="text-[#e10600]">INSIGHTS</span></h1>
//           <div class="w-16 h-1 bg-[#e10600] mx-auto mb-6"></div>
//           <p class="text-gray-600 max-w-2xl mx-auto text-lg">Latest news, tips, and trends from the world of design, branding, and printing.</p>
//         </div>

//         <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
//           @for (post of posts; track post.title) {
//             <article class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group border border-gray-100 hover:shadow-xl transition-shadow">
//               <div class="h-48 overflow-hidden bg-gray-200">
//                 <img [src]="post.image" [alt]="post.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//               </div>
//               <div class="p-8 flex-grow flex flex-col">
//                 <div class="flex items-center gap-4 mb-3">
//                   <span class="text-[#e10600] text-xs font-bold tracking-widest uppercase">{{ post.category }}</span>
//                   <span class="text-gray-400 text-xs">{{ post.date }}</span>
//                 </div>
//                 <h3 class="text-xl font-heading font-bold mb-3 group-hover:text-[#e10600] transition-colors leading-snug">{{ post.title }}</h3>
//                 <p class="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">{{ post.excerpt }}</p>
//                 <a href="#" class="inline-block mt-auto text-sm font-bold tracking-widest text-[#0a0a0a] uppercase hover:text-[#e10600] transition-colors">
//                   Read Article &rarr;
//                 </a>
//               </div>
//             </article>
//           }
//         </div>

//         <!-- Pagination Placeholder -->
//         <div class="mt-16 flex justify-center gap-2">
//           <button class="w-10 h-10 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center font-bold text-sm">1</button>
//           <button class="w-10 h-10 rounded-full bg-white text-[#0a0a0a] border border-gray-200 hover:border-[#e10600] hover:text-[#e10600] flex items-center justify-center font-bold text-sm transition-colors">2</button>
//           <button class="w-10 h-10 rounded-full bg-white text-[#0a0a0a] border border-gray-200 hover:border-[#e10600] hover:text-[#e10600] flex items-center justify-center font-bold text-sm transition-colors">3</button>
//         </div>
//       </div>
//     </div>
//   `
// })
// export class BlogComponent {
//   readonly posts = [
//     {
//       title: 'The Importance of High-Quality Vehicle Branding for Your Business',
//       category: 'Vehicle Branding',
//       date: 'May 15, 2026',
//       excerpt: 'Vehicle branding is one of the most cost-effective marketing strategies. Learn how a well-designed wrap can turn your company car into a moving billboard.',
//       image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop'
//     },
//     {
//       title: 'Top 5 Signage Trends for Modern Retail Stores',
//       category: 'Signage',
//       date: 'April 28, 2026',
//       excerpt: 'From 3D illuminated letters to minimalist frosted glass, discover the latest signage trends that are helping retail stores attract more foot traffic.',
//       image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&q=80&fit=crop'
//     },
//     {
//       title: 'Why Corporate Apparel Matters for Team Building',
//       category: 'Corporate Gifts',
//       date: 'April 10, 2026',
//       excerpt: 'Branded t-shirts and hoodies do more than just make your team look uniform; they build a sense of belonging and boost company morale.',
//       image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80&fit=crop'
//     }
//   ];
// }
