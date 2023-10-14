import React, { ReactElement } from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';

import { compose } from 'redux';

import { State } from 'src/common/types';
import enMessages from 'src/translations/en.json';
import viMessages from 'src/translations/vi.json';

import { FormValidateLocale } from './FormValidateLocale';

type Props = {
  children: ReactElement;
  locale: string;
};

const messages = {
  en: enMessages,
  vi: viMessages,
};

const LanguageProvider: React.FC<Props> = ({ children, locale }) => (
  <IntlProvider locale={locale} defaultLocale="en" messages={messages[locale as keyof typeof messages]}>
    <FormValidateLocale />
    {children}
  </IntlProvider>
);

const mapStateToProps = ({ global: { locale } }: State) => ({
  locale,
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(LanguageProvider);
