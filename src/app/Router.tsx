import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import { ErrorPage, MainPage } from '~/pages';
import ApplyMembershipPage from '~/pages/ApplyMembership';
import ChargePage from '~/pages/Charge';
import CreateAccountPage from '~/pages/CreateAccount';
import CreateAccountCertificationPage from '~/pages/CreateAccountCertification';
import DidPage from '~/pages/Did';
import PayPage from '~/pages/Pay';
import PayInputCompletePage from '~/pages/PayInputComplete';
import PaySendPage from '~/pages/PaySend';
import PaySendCompletePage from '~/pages/PaySendComplete';
import ShopPage from '~/pages/Shop';
import TransferPage from '~/pages/Transfer';
import TransferHistoryPage from '~/pages/TransferHistory';
import TransferInputCompletePage from '~/pages/TransferInputComplete';
import TransferSendPage from '~/pages/TransferSend';
import TransferSendCompletePage from '~/pages/TransferSendComplete';

import type { RouteObject } from 'react-router-dom';

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
        path: 'charge',
        element: <ChargePage />,
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
