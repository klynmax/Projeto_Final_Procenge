import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosmanterComponent } from './produtosmanter.component';

describe('ProdutosmanterComponent', () => {
  let component: ProdutosmanterComponent;
  let fixture: ComponentFixture<ProdutosmanterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosmanterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosmanterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
