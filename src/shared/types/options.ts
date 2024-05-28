import {ReactNode} from 'react';

export interface LabelOptionsI {
  label: ReactNode;
  value: number | string;
  quantity?: number;
}

export interface AutoCompleteOptionsI {
  label: string;
  _id?: string;
}

export type LabelOptionsWithId = LabelOptionsI & {
  _id: string;
};
