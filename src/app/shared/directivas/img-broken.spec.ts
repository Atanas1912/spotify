import { ElementRef } from '@angular/core';
import { ImgBroken } from './img-broken';

describe('ImgBroken', () => {
  it('should create an instance', () => {
    const mockElement = new ElementRef('')
    const directive = new ImgBroken(mockElement);
    expect(directive).toBeTruthy();
  });
});
