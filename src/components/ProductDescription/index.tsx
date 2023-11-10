import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';

import { DescriptionContext } from 'src/containers/ProductDetail';

import messages from './messages';
import styles from './styles';

function ProductDescription() {
  const description = useContext(DescriptionContext);
  const descriptionLines = description.split('\n');

  const renderDescription = (descriptionLines: string[]) =>
    descriptionLines.map((line: string, index: number) => (
      <p key={index}>
        {line.split('\\n').map((text, idx) => (
          <React.Fragment key={idx}>{text}</React.Fragment>
        ))}
      </p>
    ));

  return (
    <Box>
      <Box component="h3" sx={styles.specification}>
        <FormattedMessage {...messages.specification} />:
      </Box>
      {renderDescription(descriptionLines)}
    </Box>
  );
}

export default ProductDescription;
