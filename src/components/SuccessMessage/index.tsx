import { styled } from '@mui/joy/styles';
import { green } from '@mui/material/colors';

interface Props {
  message?: string;
}

const Span = styled('span')(() => ({
  color: green[500],
  fontSize: 14,
}));

function SuccessMessage({ message }: Props) {
  if (message) {
    return <Span>{message}</Span>;
  }

  return <></>;
}

export default SuccessMessage;
