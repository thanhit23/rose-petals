import { defineMessages } from 'react-intl';

export const scope = 'Components.ImageCropper';

export default defineMessages({
  setNewProfilePicture: {
    id: `${scope}.setNewProfilePicture`,
    defaultMessage: 'Set new profile picture',
  },
  imageSizeError: {
    id: `${scope}.imageSizeError`,
    defaultMessage: 'Image must be at least 150 × 150 pixels.',
  },
  uploadAvatarFailed: {
    id: `${scope}.uploadAvatarFailed`,
    defaultMessage: 'Upload avatar failed',
  },
  updateAvatarSuccess: {
    id: `${scope}.updateAvatarSuccess`,
    defaultMessage: 'Update avatar success',
  },
  updateAvatarFailed: {
    id: `${scope}.updateAvatarFailed`,
    defaultMessage: 'Update avatar failed',
  },
});
