import type { PropsWithChildren } from 'react';

export interface ModalPropsCustom extends PropsWithChildren {
  visible: boolean;
  onClose?: () => void;
}
