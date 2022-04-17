import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  exportAs: 'appHighlight'
})
export class HighlightDirective {

  @HostBinding('style.color') color = 'blue';

  @Input() set appHighlight(isActive: boolean) {
    if(isActive) {
      this.color = 'red';
    } else {
      this.color = 'blue';
    }
  };


  constructor(private elementRef: ElementRef) { }



}
