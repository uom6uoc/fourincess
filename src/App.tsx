import GlobalStyle from '~/app/GlobalStyle';
import AppRouter from '~/app/Router';

const App = () => {
  const auth = localStorage.getItem('auth-four');

  if (!auth) return null;

  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
};

export default App;
