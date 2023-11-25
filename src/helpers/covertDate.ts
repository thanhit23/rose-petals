import moment from 'moment';

const covertDate = (date: string) => {
  const dateTimeString = date;

  const momentObj = moment(dateTimeString);

  return momentObj.format('YYYY-MM-DD HH:mm');
};

export default covertDate;
