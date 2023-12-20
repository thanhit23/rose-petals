import { format } from 'date-fns';

const formatDate = (date: string) => {
  if (!date) return;

  const formattedDate = format(new Date(date), 'MMM d, yyyy');
  return formattedDate;
};

export default formatDate;
