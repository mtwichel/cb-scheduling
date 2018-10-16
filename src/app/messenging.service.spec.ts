import { TestBed } from '@angular/core/testing';

import { MessengingService } from './messenging.service';

describe('MessengingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessengingService = TestBed.get(MessengingService);
    expect(service).toBeTruthy();
  });
});
