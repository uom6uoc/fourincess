import * as React from 'react';

import GlobalStyle from '~/app/GlobalStyle';
import AppRouter from '~/app/Router';
import { WALLET_BOSS } from './app/constant';
import { useWalletInfoStore } from './store/walletInfo';

const App = () => {
  const isBoss = localStorage.getItem('isBoss');
  const updateUser = useWalletInfoStore((state) => state.updateUser);

  const auth = localStorage.getItem('auth-four');

  React.useEffect(() => {
    if (!isBoss) return;

    updateUser(WALLET_BOSS);
  }, [isBoss]);

  if (!auth) return null;

  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
};

export default App;
