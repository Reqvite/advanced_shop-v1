import {ReactNode} from 'react';

export interface LabelOptionsI {
  label: ReactNode;
  value: number | string;
  quantity?: number;
}

export type LabelOptionsWithId = LabelOptionsI & {
  _id: string;
};
