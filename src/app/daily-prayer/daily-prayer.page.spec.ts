import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DailyPrayerPage } from './daily-prayer.page';

describe('DailyPrayerPage', () => {
  let component: DailyPrayerPage;
  let fixture: ComponentFixture<DailyPrayerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyPrayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
