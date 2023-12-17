import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import FormEditProfileUser from 'src/components/FormEditProfileUser';
import { UserSubmitForm } from 'src/components/FormEditProfileUser/types';
import SideBarUser from 'src/components/SideBarUser';

import { editUser, updateAvatar, uploadFile } from './services';
import { TData } from './types';

const Profile: React.FC = () => {
  const queryClient = useQueryClient();

  const updateProfileUser = useMutation({
    mutationFn: (data: UserSubmitForm) => editUser(data),
    onSuccess: async ({ data: { status } }: TData) => {
      if (status) {
        await queryClient.invalidateQueries({
          queryKey: ['/me'],
        });
      }
    },
  });

  const updateAvatarUser = useMutation({
    mutationFn: (avatar: string) => updateAvatar(avatar),
    onSuccess: async ({ data: { status } }: TData) => {
      if (status) {
        await queryClient.invalidateQueries({
          queryKey: ['/me'],
        });
      }
    },
  });

  const uploadAvatar = useMutation({
    mutationFn: (data: object) => uploadFile(data),
  });

  return (
    <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
      <Grid container spacing={{ xs: 3 }}>
        <SideBarUser />
        <FormEditProfileUser
          onUpdateProfileUser={updateProfileUser}
          onUploadAvatar={uploadAvatar}
          onUpdateAvatarUser={updateAvatarUser}
        />
      </Grid>
    </Container>
  );
};

export const Component = Profile;
