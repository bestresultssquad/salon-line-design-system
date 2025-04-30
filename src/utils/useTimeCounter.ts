import { useEffect, useState, useRef } from 'react';
import { isValid } from 'date-fns';
import { AppState } from 'react-native';

export function useTimeCounter(endDate: Date) {
  const [state, setState] = useState({
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

        const formattedDays = days.toFixed(0).padStart(2, '0');
        const formattedHours = hours.toFixed(0).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        setState({
          days: formattedDays,
          hours: formattedHours,
          minutes: formattedMinutes,
          seconds: formattedSeconds,
          hasEnded: false,
        });
      } else {
        setState((prev) => ({ ...prev, hasEnded: true }));

        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
        }
      }
    };

    const handleAppStateChange = (nextAppState: string) => {
      if (nextAppState === 'active') {
        updateCounter();
        intervalRef.current = setInterval(updateCounter, 1000);
      } else if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };

    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange
    );

    if (AppState.currentState === 'active') {
      updateCounter();
      intervalRef.current = setInterval(updateCounter, 1000);
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
      subscription.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
}
