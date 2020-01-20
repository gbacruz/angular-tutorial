import { Injectable } from '@angular/core';

import { Appointment } from '../../models/appointment';

@Injectable()
export class Appointments {
  appointments: Appointment[] = [];

  defaultAppointment: any = {
    "name": "Checeo General",
    "start": '01/07/2017',
    "end": '01/07/2017'
  };


  constructor() {
    let appointments = [
      {
        "name": "Checeo General",
        "start": '01/07/2017',
        "end": '01/07/2017',
        "symptoms":[
          {
            "zone":"cabeza",
            "intensity":"bajo",
            "indicator":"lobulo derecho",
            "desc":"",
            "synp":"dolor"
          }
        ],
        "signals":[
          {
            "element":"Temperatura",
            "measure":"67",
            "units":"grados centigrados",
            "time":"un par de horas",
          }
        ]
      },
      {
        "name": "Cuestión médica",
        "start": '01/07/2019',
        "end": '01/07/2019'
      }

    ];

    for (let appointment of appointments) {
      this.appointments.push(new Appointment(appointment));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.appointments;
    }

    return this.appointments.filter((appointment) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return appointment;
        } else if (field == params[key]) {
          return appointment;
        }
      }
      return null;
    });
  }

  add(appointment: Appointment) {
    this.appointments.push(appointment);
  }

  delete(appointment: Appointment) {
    this.appointments.splice(this.appointments.indexOf(appointment), 1);
  }
}
