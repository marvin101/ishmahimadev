import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BhajanPage } from './bhajan.page';

describe('BhajanPage', () => {
  let component: BhajanPage;
  let fixture: ComponentFixture<BhajanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BhajanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
