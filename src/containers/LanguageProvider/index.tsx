import { ReactElement } from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';

import { compose } from 'redux';

import enMessages from 'src/translations/en.json';
import viMessages from 'src/translations/vi.json';

import { States } from '../LoadingIndicator/types';
import { FormValidateLocale } from './FormValidateLocale';

interface LanguageProviderTypes {
  children: ReactElement;
  locale: string;
}

const messages = {
  en: enMessages,
  vi: viMessages,
};

function LanguageProvider({ children, locale }: LanguageProviderTypes) {
  return (
    <IntlProvider locale={locale} defaultLocale="en" messages={messages[locale as keyof typeof messages]}>
      <FormValidateLocale />
      {children}
    </IntlProvider>
  );
}

const mapStateToProps = (state: States) => {
  const {
    global: { locale },
  } = state;

  return {
    locale,
  };
};

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(LanguageProvider);
