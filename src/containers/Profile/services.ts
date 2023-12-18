import Service from 'src/service';

export const getAnalytics = () => Service.get('/v1/users/analytics');
