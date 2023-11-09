import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import { ErrorPage, MainPage, TestPage } from '~/pages';

import type { RouteObject } from 'react-router-dom';
import CreateAccountPage from '~/pages/CreateAccount';
import CreateAccountCertificationPage from '~/pages/CreateAccountCertification';
import DidPage from '~/pages/Did';
import ApplyMembershipPage from '~/pages/ApplyMembership';
import TransferPage from '~/pages/Transfer';
import TransferInputCompletePage from '~/pages/TransferInputComplete';
import TransferSendPage from '~/pages/TransferSend';
import TransferSendCompletePage from '~/pages/TransferSendComplete';
import TransferHistoryPage from '~/pages/TransferHistory';
import TransferChargePage from '~/pages/TransferCharge';
import ShopPage from '~/pages/Shop';
import PayPage from '~/pages/Pay';
import PayInputCompletePage from '~/pages/PayInputComplete';
import PaySendPage from '~/pages/PaySend';
import PaySendCompletePage from '~/pages/PaySendComplete';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'create-account',
        element: <CreateAccountPage />,
      },
      {
        path: 'create-account/certification',
        element: <CreateAccountCertificationPage />,
      },
      {
        path: 'main',
        element: <MainPage />,
      },
      {
        path: 'did',
        element: <DidPage />,
      },
      {
        path: 'apply-membership',
        element: <ApplyMembershipPage />,
      },
      {
        path: 'transfer',
        element: <TransferPage />,
      },
      {
        path: 'transfer/input/compelete',
        element: <TransferInputCompletePage />,
      },
      {
        path: 'transfer/send',
        element: <TransferSendPage />,
      },
      {
        path: 'transfer/send/complete',
        element: <TransferSendCompletePage />,
      },
      {
        path: 'transfer/history',
        element: <TransferHistoryPage />,
      },
      {
        path: 'transfer/charge',
        element: <TransferChargePage />,
      },
      {
        path: 'pay',
        element: <PayPage />,
      },
      {
        path: 'pay/input/compelete',
        element: <PayInputCompletePage />,
      },
      {
        path: 'pay/send',
        element: <PaySendPage />,
      },
      {
        path: 'pay/send/complete',
        element: <PaySendCompletePage />,
      },
      {
        path: 'shop',
        element: <ShopPage />,
      },
    ],
  },
  {
    path: '/test',
    element: <TestPage />,
  },
  {
    path: '/error',
    element: <ErrorPage />,
  },
  {
    path: '*',
    element: <Navigate replace to={'/'} />,
  },
];

const router = createBrowserRouter(routes);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
