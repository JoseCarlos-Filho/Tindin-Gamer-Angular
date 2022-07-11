import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUsuarioLogadoComponent } from './page-usuario-logado.component';

describe('PageUsuarioLogadoComponent', () => {
  let component: PageUsuarioLogadoComponent;
  let fixture: ComponentFixture<PageUsuarioLogadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUsuarioLogadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageUsuarioLogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
