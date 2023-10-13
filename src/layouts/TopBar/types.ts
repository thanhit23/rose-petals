import { CHANGE_LOCALE } from './constants';

export type ChangeLocalePayload = {
  locale: string;
};

export type ChangeLocale = {
  type: typeof CHANGE_LOCALE;
  locale: ChangeLocalePayload;
};
