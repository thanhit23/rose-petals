import { styled } from '@mui/joy/styles';
import { red } from '@mui/material/colors';

interface Props {
  name?: {
    message?: string;
  };
}

const Span = styled('span')(() => ({
  color: red[500],
  fontSize: 14,
}));

function ErrorMessage({ name }: Props) {
  if (name) {
    return <Span>{name.message}</Span>;
  }

  return <></>;
}

export default ErrorMessage;
