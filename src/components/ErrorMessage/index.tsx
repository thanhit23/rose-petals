import { styled } from '@mui/joy/styles';
import { red } from '@mui/material/colors';

interface Props {
  name?: {
    message?: string;
  };
  sx?: object;
}

const Span = styled('span')(() => ({
  color: red[500],
  fontSize: 14,
}));

function ErrorMessage({ name, sx }: Props) {
  if (name) {
    return <Span sx={sx}>{name.message}</Span>;
  }

  return <></>;
}

export default ErrorMessage;
