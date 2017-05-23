import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { EncryptionService } from '../encryption/encryption.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
