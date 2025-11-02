import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[fadeInOnView]',
  standalone: true
})
export class FadeInOnViewDirective implements OnInit {
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    const el = this.el.nativeElement as HTMLElement;
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    const io = new IntersectionObserver(entries => {
      entries.forEach(e=>{
        if(e.isIntersecting){
          el.style.transition = 'opacity .6s ease, transform .6s ease';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          io.disconnect();
        }
      });
    }, { threshold: 0.2 });
    io.observe(el);
  }
}
