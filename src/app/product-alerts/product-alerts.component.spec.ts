import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../products';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAlertsComponent } from './product-alerts.component';

export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}

describe('ProductAlertsComponent', () => {
  let component: ProductAlertsComponent;
  let fixture: ComponentFixture<ProductAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
