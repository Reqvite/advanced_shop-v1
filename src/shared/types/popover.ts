export interface PopoverChildI {
  _id: string;
  label?: string;
  href?: string;
  onClick?: () => void;
}

export interface PopoverItemI {
  _id: string;
  label?: string;
  children: PopoverChildI[];
}
