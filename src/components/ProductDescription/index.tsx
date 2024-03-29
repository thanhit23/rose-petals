import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import { Skeleton } from '@mui/material';
import Box from '@mui/material/Box';

import { DescriptionContext } from 'src/containers/ProductDetail';

import messages from './messages';
import styles from './styles';

function ProductDescription() {
  const descriptionCtx = useContext(DescriptionContext);
  const descriptionLines = descriptionCtx.description.split('\n');

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
      {descriptionCtx.isLoading ? (
        <Box>
          <Skeleton animation="wave" width="80%" />
          <Skeleton animation="wave" width="60%" />
          <Skeleton animation="wave" width="40%" />
        </Box>
      ) : (
        <React.Fragment>{renderDescription(descriptionLines)}</React.Fragment>
      )}
    </Box>
  );
}

export default ProductDescription;
