import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeditemCardComponent } from './feeditem-card.component';

describe('FeeditemCardComponent', () => {
  let component: FeeditemCardComponent;
  let fixture: ComponentFixture<FeeditemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeditemCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeditemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
