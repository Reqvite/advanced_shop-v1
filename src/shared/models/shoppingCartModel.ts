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
  public notes?: string;
  public newsLatterAgreement?: boolean;
  public iso3?: string;
  public privacyPolicyAgreement: boolean;

  constructor({user}: {user?: User | null}) {
    this.firstName = user?.firstName || '';
    this.lastName = user?.lastName || '';
    this.email = user?.email || '';
    this.phoneNumber = user?.phoneNumber || '';
    this.address = '';
    this.country = '';
    this.city = '';
    this.zip = '';
    this.notes = '';
    this.newsLatterAgreement = false;
    this.privacyPolicyAgreement = false;
    this.iso3 = '';
  }
}
