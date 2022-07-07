import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeNavbarComponent } from './page-home-navbar.component';

describe('PageHomeNavbarComponent', () => {
  let component: PageHomeNavbarComponent;
  let fixture: ComponentFixture<PageHomeNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHomeNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHomeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
