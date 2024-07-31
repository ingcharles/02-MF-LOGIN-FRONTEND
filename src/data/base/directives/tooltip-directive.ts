import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, Input, OnChanges, PLATFORM_ID, Renderer2 } from '@angular/core';

declare var bootstrap: any;

@Directive({
  selector: '[appTooltip]',
  standalone: true
})
export class TooltipDirective implements OnChanges {
  @Input('appTooltip') tooltipTitle!: string;
  @Input() placement!: string;
  @Input() delay!: number;
  @Input() isTooltipEnabled!: boolean;

  tooltip: any;

  constructor(private el: ElementRef, private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: any) {}

  ngOnChanges(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeTooltip();
    }
  }

  private initializeTooltip() {
    // Dispose of the existing tooltip if it exists
    if (this.tooltip) {
      this.tooltip.dispose();
      this.tooltip = null;
    }

    // Initialize the tooltip if it is enabled
    if (this.isTooltipEnabled) {
      this.renderer.setAttribute(this.el.nativeElement, 'title', this.tooltipTitle);
      this.renderer.setAttribute(this.el.nativeElement, 'data-bs-toggle', 'tooltip');
      this.renderer.setAttribute(this.el.nativeElement, 'data-bs-placement', this.placement || 'top');
      // this.renderer.setAttribute(this.el.nativeElement, 'data-bs-offset', '20,0,0, 0');
      this.renderer.setAttribute(this.el.nativeElement, 'data-bs-delay', `200`);

      const bootstrap = (window as any).bootstrap;
      if (bootstrap) {
        this.tooltip = new bootstrap.Tooltip(this.el.nativeElement, {
          offset: [50,5] // Adjust offset for top-right position
        });
      }
    } else {
      this.renderer.removeAttribute(this.el.nativeElement, 'title');
      this.renderer.removeAttribute(this.el.nativeElement, 'data-bs-toggle');
      this.renderer.removeAttribute(this.el.nativeElement, 'data-bs-placement');
      this.renderer.removeAttribute(this.el.nativeElement, 'data-bs-delay');
      this.renderer.removeAttribute(this.el.nativeElement, 'data-bs-offset');
    }
  }

  ngOnDestroy(): void {
    // Dispose of the tooltip when the directive is destroyed
    if (this.tooltip) {
      this.tooltip.dispose();
    }
  }
}
