import { Injectable } from '@angular/core';

@Injectable()
export class Logger4OptionalService {

  constructor() { }

  log(message: string): void {
    console.log(`[Logger4OptionalService] ${message}`);
  }

}
