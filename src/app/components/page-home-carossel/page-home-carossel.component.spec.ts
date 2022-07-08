import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeCarosselComponent } from './page-home-carossel.component';

describe('PageHomeCarosselComponent', () => {
  let component: PageHomeCarosselComponent;
  let fixture: ComponentFixture<PageHomeCarosselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHomeCarosselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHomeCarosselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
