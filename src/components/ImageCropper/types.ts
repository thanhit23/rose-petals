import { UseMutationResult } from '@tanstack/react-query';

import { TData } from 'src/containers/Profile/Edit/types';

export type Props = {
  openModal: boolean;
  handleCloseModal: () => void;
  onUploadAvatar: UseMutationResult<UploadAvatarResponse, unknown, object, unknown>;
  onUpdateAvatarUser: UseMutationResult<TData, unknown, string, unknown>;
};

export interface UploadAvatarResponse {
  data: { data: string[]; status: boolean };
}
