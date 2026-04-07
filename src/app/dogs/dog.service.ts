import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Dog } from './dogs.modal';

@Injectable({ providedIn: 'root' })
export class DogsService {
  http = inject(HttpClient);

  getDogs() {
    return this.http.get<Dog[]>('https://dogapi.dog/api/v2/breeds');
  }
}
