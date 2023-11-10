import * as React from 'react';

import GlobalStyle from '~/app/GlobalStyle';
import AppRouter from '~/app/Router';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
};

export default App;
