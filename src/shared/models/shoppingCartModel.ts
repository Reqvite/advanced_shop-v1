import {User} from '../types/user/user';

export class ShoppingCartModel {
  public firstName: string;
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
    this.firstName = user?.firstName || defaultValues?.firstName || '';
    this.lastName = user?.lastName || defaultValues?.lastName || '';
    this.email = user?.email || defaultValues?.email || '';
    this.phoneNumber = user?.phoneNumber || defaultValues?.phoneNumber || '';
    this.address = defaultValues?.address || '';
    this.country = defaultValues?.country || '';
    this.city = defaultValues?.city || '';
    this.zip = defaultValues?.zip || '';
  }
}
