import { intervalToDuration, parseISO } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

export function timeElapsed(dataString: string) {
  const dataPassada = parseISO(dataString);

  const duration = intervalToDuration({
    start: formatInTimeZone(
      dataPassada,
      'America/Sao_Paulo',
      'yyyy-MM-dd HH:mm:ss'
    ),
    end: formatInTimeZone(
      new Date(),
      'America/Sao_Paulo',
      'yyyy-MM-dd HH:mm:ss'
    ),
  });

  if (duration?.years && duration.years > 0) {
    return `${duration.years} ano(s) atrás`;
  }
  if (duration?.months && duration.months > 0) {
    return `${duration.months} mês(es) atrás`;
  }
  if (duration?.days && duration.days > 0) {
    return `${duration.days} dia(s) atrás`;
  }
  if (duration?.hours && duration.hours > 0) {
    return `${duration.hours} hora(s) atrás`;
  }
  return '';
}
