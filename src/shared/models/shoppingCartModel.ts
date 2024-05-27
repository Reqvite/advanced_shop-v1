import {User} from '../types/user/user';

export class ShoppingCartModel {
  public name: string;
  public lastName: string;
  public email: string;
  public phoneNumber: string;
  public address: string;
  public country: string;
  public city: string;
  public zip: string;

  constructor({
    user,
    defaultValues
  }: {
    user?: User | null;
    defaultValues?: Partial<ShoppingCartModel>;
  }) {
    this.name = user?.firstName || defaultValues?.name || '';
    this.lastName = user?.lastName || defaultValues?.lastName || '';
    this.email = user?.email || defaultValues?.email || '';
    this.phoneNumber = user?.phoneNumber || defaultValues?.phoneNumber || '';
    this.address = defaultValues?.address || '';
    this.country = defaultValues?.country || '0';
    this.city = defaultValues?.city || '0';
    this.zip = defaultValues?.zip || '';
  }
}
