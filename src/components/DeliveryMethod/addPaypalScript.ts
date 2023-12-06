const addPaypalScript = (setSdkReady: React.Dispatch<React.SetStateAction<boolean>>) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.REACT_APP_PAYPAL_CLIENT_ID}`;
  script.async = true;
  script.onload = () => {
    setSdkReady(true);
  };
  document.body.appendChild(script);
};

export default addPaypalScript;
