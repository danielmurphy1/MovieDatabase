import { TestBed } from '@angular/core/testing';

import { MoviesDatabaseService } from './movies-database.service';

describe('MoviesDatabaseService', () => {
  let service: MoviesDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
