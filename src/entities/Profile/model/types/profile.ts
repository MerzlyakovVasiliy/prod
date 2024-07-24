import { CurrencyType } from 'entities/Currency/model/types/currencyType';
import { CountryType } from 'entities/Country/model/types/country';

export interface ProfileType {
    first?: string;
    lastname?: string;
    age?: number;
    currency?: CurrencyType;
    country?: CountryType;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: ProfileType;
    form?: ProfileType;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
