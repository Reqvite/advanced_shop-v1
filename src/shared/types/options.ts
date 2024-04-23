import {ReactNode} from 'react';

export interface LabelOptionsI {
  label: ReactNode;
  value: number | string;
}

export type LabelOptionsWithId = LabelOptionsI & {
  _id: string;
};
