import {ReactNode} from 'react';

export interface Option {
  label: string;
  value: number;
  _id: string;
}

export interface LabelOptionsI {
  label: ReactNode;
  value: number | string;
  quantity?: number;
}

export interface TabOptionsI {
  label: string;
  value: string;
  count?: number;
}

export interface AutoCompleteOptionsI {
  label: string;
  _id?: string;
}

export type LabelOptionsWithId = LabelOptionsI & {
  _id: string;
};
