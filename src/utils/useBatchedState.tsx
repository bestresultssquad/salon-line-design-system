import React from 'react';
import { unstable_batchedUpdates } from 'react-native';

const originaluseBatchedState = React.useState;

export function useBatchedState<T>(initialValue: T | (() => T)) {
  const [state, setState] = originaluseBatchedState(initialValue);
  const updateQueue = React.useRef<(() => void)[]>([]);
  const updateInProgress = React.useRef(false);

  const batchedSetState = React.useCallback(
    (value: React.SetStateAction<T>) => {
      updateQueue.current.push(() => {
        setState(value);
      });

      if (!updateInProgress.current) {
        updateInProgress.current = true;
        unstable_batchedUpdates(() => {
          const tasks = updateQueue.current;
          updateQueue.current = [];
          tasks.forEach((task) => task());
          updateInProgress.current = false;
        });
      }
    },
    [setState]
  );

  return [state, batchedSetState] as const;
}

export const useBatchedStateSync = originaluseBatchedState;
