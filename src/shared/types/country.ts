export interface CountryI {
  country: string;
  cities: string[];
  iso2: string;
}

export interface CountryOption {
  label: string;
  value: string;
  _id: string;
}

export interface CountryTransformI {
  data: CountryI[];
  transformedData: CountryOption[];
}
