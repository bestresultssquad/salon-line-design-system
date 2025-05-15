import { useEffect, useRef } from 'react';
import { isValid } from 'date-fns';
import { useBatchedState } from './useBatchedState';

export function useTimeCounter(endDate: Date) {
  const [state, setState] = useBatchedState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    hasEnded: true,
  });

  const intervalRef = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    if (!isValid(endDate)) return;

    const segundo = 1000;
    const minuto = segundo * 60;
    const hora = minuto * 60;
    const dia = hora * 24;

    const updateCounter = () => {
      const currDate = new Date();
      const timeleft = endDate.getTime() - currDate.getTime();

      if (timeleft > 0) {
        const days = Math.floor(timeleft / dia);
        const hours = Math.floor((timeleft % dia) / hora);
        const minutes = Math.floor((timeleft % hora) / minuto);
        const seconds = Math.floor((timeleft % minuto) / segundo);

        // Only update if values changed
        setState((prev) => {
          const newState = {
            days: String(days).padStart(2, '0'),
            hours: String(hours).padStart(2, '0'),
            minutes: String(minutes).padStart(2, '0'),
            seconds: String(seconds).padStart(2, '0'),
            hasEnded: false,
          };
          return JSON.stringify(prev) !== JSON.stringify(newState)
            ? newState
            : prev;
        });
      } else {
        setState((prev) =>
          prev.hasEnded
            ? prev
            : {
                days: '00',
                hours: '00',
                minutes: '00',
                seconds: '00',
                hasEnded: true,
              }
        );
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    };

    updateCounter();
    intervalRef.current = setInterval(updateCounter, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [endDate]);

  return state;
}
