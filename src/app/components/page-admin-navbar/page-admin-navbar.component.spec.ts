import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminNavbarComponent } from './page-admin-navbar.component';

describe('PageAdminNavbarComponent', () => {
  let component: PageAdminNavbarComponent;
  let fixture: ComponentFixture<PageAdminNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAdminNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAdminNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
