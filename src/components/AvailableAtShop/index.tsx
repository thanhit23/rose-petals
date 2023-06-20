import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import messages from './messages';
import styles from './styles';

function AvailableAtShop() {
  const data = [
    {
      src: 'https://bazar-react.vercel.app/assets/images/faces/propic.png',
      name: 'Tech Friend',
    },
    {
      src: 'https://bazar-react.vercel.app/assets/images/faces/propic(1).png',
      name: 'Smart Shop',
    },
  ];

  return (
    <Box marginBottom="60px">
      <Box component="h3">
        <FormattedMessage {...messages.title} />
      </Box>
      <Grid container spacing={{ xs: 4 }}>
        {data.map(({ src, name }, i) => (
          <Grid key={i} item xs={12} sm={4} md={3} lg={2}>
            <Link to="/">
              <Paper sx={styles.paperAvatar}>
                <Avatar src={src} sx={styles.avatar} />
                <Box sx={styles.avatarName}>{name}</Box>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default AvailableAtShop;
