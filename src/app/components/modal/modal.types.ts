import { ReactNode } from 'react';

export type PropsType = {
  children: ReactNode;
  sideToastModal?: boolean;
  closeCallback?: () => void;
};
