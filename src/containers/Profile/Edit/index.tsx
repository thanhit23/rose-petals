import React from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import FormEditProfileUser from 'src/components/FormEditProfileUser';
import { UserSubmitForm } from 'src/components/FormEditProfileUser/types';
import SideBarUser from 'src/components/SideBarUser';
import { PATH_AUTH } from 'src/routes/paths';

import { editUser } from './services';
import { TData } from './types';

const Profile: React.FC = () => {
  const token = localStorage.getItem('accessToken') || '';
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (data: UserSubmitForm) => editUser(data),
    onSuccess: ({ data: { status } }: TData) => {
      if (status) {
        navigate(PATH_AUTH.profile);
      }
    },
  });

  const handleSubmitForm = (data: UserSubmitForm) => {
    mutate(data, {
      onSuccess: () => {
        void queryClient.invalidateQueries({
          queryKey: ['/me', token],
          exact: true,
        });
      },
    });
  };

  return (
    <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
      <Grid container spacing={{ xs: 3 }}>
        <SideBarUser />
        <FormEditProfileUser onSubmitForm={handleSubmitForm} />
      </Grid>
    </Container>
  );
};

export const Component = Profile;
