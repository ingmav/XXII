import { TestBed } from '@angular/core/testing';

import { FuncionarioSsaService } from './funcionario-ssa.service';

describe('FuncionarioSsaService', () => {
  let service: FuncionarioSsaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncionarioSsaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
