import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConsultaCardsComponent } from './page-consulta-cards.component';

describe('PageConsultaCardsComponent', () => {
  let component: PageConsultaCardsComponent;
  let fixture: ComponentFixture<PageConsultaCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageConsultaCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageConsultaCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
