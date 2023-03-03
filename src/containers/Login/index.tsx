import { useQuery } from 'react-query';
import LoginPage from '../../components/Login';

function Login() {
  const getStudent = (data: object) => {
    console.log(data);
  };
  const handleSubmit = (data: object) => {
    const { isLoading } = useQuery({
      queryKey: ['login', data],
      queryFn: () => getStudent(data),
    });
    console.log(isLoading);
  };

  return <LoginPage onSubmit={handleSubmit} />;
}

export default Login;
