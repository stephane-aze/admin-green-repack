import { TestBed } from '@angular/core/testing';

import { ProductToSellService } from './product-to-sell.service';

describe('ProductService', () => {
  let service: ProductToSellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductToSellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
