import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appAccordionControl]'
})
export class AccordionControlDirective {

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('click') toggleDropdown() {
    const buttonEl = this.elRef.nativeElement;
    const isOpen = buttonEl.classList.contains('open');

    if (isOpen) {
      this.renderer.removeClass(buttonEl, 'open');
    } else {
      this.renderer.addClass(buttonEl, 'open');
    }
  }

}
