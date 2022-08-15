import * as moment from 'moment';

moment.locale('es');

/**
 * Clase para manejo de fechas
 */
export class MomentDate {
  parseDate(date: any, format = 'YYYY-MM-DD hh:mm:ss a') {
    let _date = moment(date || new Date()).format(format);

    return _date;
  }
}
