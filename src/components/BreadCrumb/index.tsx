import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import { Box, Breadcrumbs } from '@mui/material';

import messages from './messages';

interface Props {
  data: {
    label?: string;
    path: string;
  }[];
}

export default function BreadCrumb({ data }: Props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px', color: '#666666', gap: '0 3px' }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/" color="inherit" style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '0 3px' }}>
          <FormattedMessage {...messages.home} />
        </Link>
        {data.map((item, index) => (
          <Link
            key={index}
            color="inherit"
            to={item.path}
            style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '0 3px' }}
          >
            {item.label}
          </Link>
        ))}
      </Breadcrumbs>
    </Box>
  );
}
