import { ReactElement } from 'react';
import { IntlProvider } from 'react-intl';

import viMessages from '../../translations/vi.json';
import enMessages from '../../translations/en.json';
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
