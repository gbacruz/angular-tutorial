import { Injectable } from '@angular/core';

import { Appointment } from '../../models/appointment';
import { Api } from '../api/api';

@Injectable()
export class Appointments {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/appointments', params);
  }

  add(item: Appointment) {
  }

  delete(item: Appointment) {
  }

}
