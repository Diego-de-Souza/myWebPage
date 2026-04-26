import { ElementRef } from '@angular/core';
import { IntersectionObserverDirective } from './intersection-observer.directive';

describe('IntersectionObserverDirective', () => {
  it('should create an instance', () => {
    class MockIntersectionObserver {
      constructor(_cb: IntersectionObserverCallback, _options?: IntersectionObserverInit) {}
      observe() {}
      disconnect() {}
      unobserve() {}
      takeRecords() { return []; }
    }

    (window as any).IntersectionObserver = MockIntersectionObserver;

    const host = document.createElement('div');
    const elementRef = { nativeElement: host } as ElementRef;
    const directive = new IntersectionObserverDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
