interface ErrorMessageType {
  name?: {
    message?: string;
  };
}

function ErrorMessage({ name }: ErrorMessageType) {
  if (name) {
    return <span className="text-[#d1373a] text-[14px]">{name.message}</span>;
  }

  return <></>;
}

export default ErrorMessage;
