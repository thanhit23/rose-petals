import { styled } from '@mui/joy/styles';
import { red } from '@mui/material/colors';

interface ErrorMessageType {
  name?: {
    message?: string;
  };
}

const Span = styled('span')(() => ({
  color: red[500],
  fontSize: 14,
}));

function ErrorMessage({ name }: ErrorMessageType) {
  if (name) {
    return <Span>{name.message}</Span>;
  }

  return <></>;
}

export default ErrorMessage;
