import { ReactElement } from 'react';
import { IntlProvider } from 'react-intl';

import enMessages from 'src/translations/en.json';
import viMessages from 'src/translations/vi.json';

import { FormValidateLocale } from './FormValidateLocale';

interface LanguageProviderTypes {
  children: ReactElement;
}

const messages = {
  en: enMessages,
  vi: viMessages,
};

function LanguageProvider({ children }: LanguageProviderTypes) {
  return (
    <IntlProvider locale="en" defaultLocale="en" messages={messages.en}>
      <FormValidateLocale />
      {children}
    </IntlProvider>
  );
}

export default LanguageProvider;
