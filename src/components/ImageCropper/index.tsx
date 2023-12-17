import React, { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import ReactCrop, { PercentCrop, centerCrop, convertToPixelCrop, makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { FormattedMessage, useIntl } from 'react-intl';

import CloseIcon from '@mui/icons-material/Close';
import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import { TData } from 'src/containers/Profile/Edit/types';
import emptyFile from 'src/resources/images/emptyFile.png';

import ErrorMessage from '../ErrorMessage';
import imageUrlToFileList from './imageUrlToFileList';
import messages from './messages';
import setCanvasPreview from './setCanvasPreview';
import styles from './styles';
import { Props, UploadAvatarResponse } from './types';

const ASPECT_RATIO = 1;
const MIN_DIMENSION = 150;

const ImageCropper: React.FC<Props> = ({ openModal, handleCloseModal, onUploadAvatar, onUpdateAvatarUser }: Props) => {
  const t = useIntl();
  const handleClose = () => handleCloseModal();

  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const [crop, setCrop] = useState<PercentCrop>();
  const [imgSrc, setImgSrc] = useState('');
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState({ message: '' });

  const handleSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      const imageElement = new Image();
      const imageUrl = reader.result?.toString() || '';
      imageElement.src = imageUrl;

      imageElement.addEventListener('load', e => {
        if (error.message) setError({ message: '' });

        const { naturalWidth, naturalHeight } = e.currentTarget as HTMLImageElement;
        if (naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
          setError({ message: t.formatMessage({ ...messages.imageSizeError }) });
          return setImgSrc('');
        }
      });

      setImgSrc(imageUrl);
    });

    reader.readAsDataURL(file);
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const { width, height } = e.currentTarget;
    const cropWidthInPercent = (MIN_DIMENSION / width) * 100;

    const crop = makeAspectCrop(
      {
        unit: '%',
        width: cropWidthInPercent,
      },
      ASPECT_RATIO,
      width,
      height,
    );
    const centeredCrop = centerCrop(crop, width, height);
    setCrop(centeredCrop);
  };

  const handleUpload = async () => {
    if (crop && imgRef.current && previewCanvasRef.current) {
      setCanvasPreview(
        imgRef.current,
        previewCanvasRef.current,
        convertToPixelCrop(crop, imgRef.current.width, imgRef.current.height),
      );

      const dataUrl = previewCanvasRef.current.toDataURL();
      const fileList = await imageUrlToFileList(dataUrl, fileName);

      const handleUpdateAvatarSuccess = async ({ data }: { data: string[] }) => {
        const latestAvatar = data[data.length - 1];

        await onUpdateAvatarUser.mutate(latestAvatar, {
          onSuccess: ({ data: { status } }: TData) => {
            if (status) {
              handleClose();
              setImgSrc('');
              toast.success(<FormattedMessage {...messages.updateAvatarSuccess} />);
            } else {
              toast.error(<FormattedMessage {...messages.updateAvatarFailed} />);
            }
          },
        });
      };

      const handleUploadAvatarSuccess = async ({ data: { data, status } }: UploadAvatarResponse) => {
        if (status) {
          await handleUpdateAvatarSuccess({ data });
        } else {
          toast.error(<FormattedMessage {...messages.uploadAvatarFailed} />);
        }
      };

      const handleError = () => {
        toast.error(<FormattedMessage {...messages.uploadAvatarFailed} />);
      };

      onUploadAvatar.mutate(fileList, {
        onSuccess: handleUploadAvatarSuccess,
        onError: handleError,
      });
    }
  };

  return (
    <React.Fragment>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.boxWrapperModal}>
          <Box>
            <Box sx={styles.boxWrapperInput}>
              <Box component={'input'} accept="image/*" type="file" sx={styles.boxInput} onChange={handleSelectFile} />
              {error.message && <ErrorMessage name={error} />}
            </Box>
            {!imgSrc && <Box sx={styles.boxNoImage} component={'img'} src={emptyFile} alt="No Image" />}
            {imgSrc && (
              <Box sx={styles.boxImage}>
                <ReactCrop
                  crop={crop}
                  circularCrop
                  keepSelection
                  aspect={ASPECT_RATIO}
                  minWidth={MIN_DIMENSION}
                  onChange={(_, percentCrop) => setCrop(percentCrop)}
                >
                  <Box component={'img'} ref={imgRef} src={imgSrc} alt="Upload" onLoad={handleImageLoad} />
                </ReactCrop>
                <LoadingButton
                  variant="contained"
                  loading={onUploadAvatar.isLoading || onUpdateAvatarUser.isLoading}
                  sx={styles.btnSetProfile}
                  onClick={handleUpload}
                >
                  <FormattedMessage {...messages.setNewProfilePicture} />
                </LoadingButton>
              </Box>
            )}
          </Box>
          <Button sx={styles.btnClose} onClick={handleClose}>
            <CloseIcon />
          </Button>
        </Box>
      </Modal>
      {crop && <Box component={'canvas'} ref={previewCanvasRef} sx={styles.boxCanvas} />}
    </React.Fragment>
  );
};

export default ImageCropper;
