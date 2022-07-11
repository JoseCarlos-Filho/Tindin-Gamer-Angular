import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGameRegisterComponent } from './page-game-register.component';

describe('PageGameRegisterComponent', () => {
  let component: PageGameRegisterComponent;
  let fixture: ComponentFixture<PageGameRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGameRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageGameRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
