export interface PopoverItemI {
  _id: string;
  label?: string;
  children: {
    _id: string;
    label?: string;
    href?: string;
    onClick?: () => void;
  }[];
}
