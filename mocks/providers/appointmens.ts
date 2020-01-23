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
        "diagnosis":" Diagnostico",
        "symptoms":[
          {
            "zone":"cabeza",
            "intensity":"bajo",
            "indicator":"lobulo derecho",
            "desc":"",
            "synp":"dolor"
          },
          {
            "zone":"cuello",
            "intensity":"bajo",
            "indicator":"rededor",
            "desc":"",
            "synp":"dolor"
          },
          {
            "zone":"cerebro",
            "intensity":"bajo",
            "indicator":"",
            "desc":"",
            "synp":"Mareo"
          },
          
        ],
        "signals":[
          {
            "element":"Temperatura",
            "measure":"67",
            "units":"grados centigrados",
            "time":"un par de horas",
          }
        ],
        "medication":[
          {
            "temporal":"2 semanas",
            "frecuency":"8 horas",
            "medicine":"Ampicilina",
            "units":"una capsula",
          },
          {
            "temporal":"3 días",
            "frecuency":"6 horas",
            "medicine":"Antiestamínico",
            "units":"dos tabletas",
          }
          
        ]
      },
      {
        "name": "Cuestión médica",
        "start": '01/07/2019',
        "end": '01/07/2019',
        "symptoms":[
          {
            "zone":"espalda alta",
            "intensity":"agudo",
            "indicator":"espalda",
            "desc":"",
            "synp":"dolor"
          },

          
        ],
        "signals":[
          {
            "element":"Temperatura",
            "measure":"67",
            "units":"grados centigrados",
            "time":"un par de horas",
          }
        ]        
        
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
        let field = appointment[key];
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
