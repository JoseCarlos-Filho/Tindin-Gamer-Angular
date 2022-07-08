import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeCardsComponent } from './page-home-cards.component';

describe('PageHomeCardsComponent', () => {
  let component: PageHomeCardsComponent;
  let fixture: ComponentFixture<PageHomeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHomeCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHomeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
