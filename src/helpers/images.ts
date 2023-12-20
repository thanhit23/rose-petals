const integrationPathImage = (src: string) => {
  let endpoint = process.env.REACT_APP_IMAGE_BASE_URL;

  if (src?.[0] !== '/') {
    endpoint += '/';
  }

  return endpoint + src;
};

export default integrationPathImage;
