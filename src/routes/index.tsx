import { Navigate, createBrowserRouter } from 'react-router-dom';

import Layout from 'src/layout/layout';

import Auth from 'src/pages/Auth';
import Onboarding from 'src/pages/Onboarding';

import Landing from 'src/pages/Landing';

import Sports from 'src/pages/Sports';
import AllSports from 'src/pages/Sports/AllSports';
import LiveSports from 'src/pages/Sports/LiveSports';
import ASport from 'src/pages/Sports/ASport';
import Competition from 'src/pages/Sports/Competition';
import Match from 'src/pages/Sports/Match';
import BetHistory from 'src/pages/Sports/BetHistory';

import Esports from 'src/pages/Esports';
import AllEsports from 'src/pages/Esports/AllEsports';
import LiveEsports from 'src/pages/Esports/LiveEsports';
import AEsport from 'src/pages/Esports/AEsport';
import ECompetition from 'src/pages/Esports/ECompetition';
import EMatch from 'src/pages/Esports/EMatch';

import Casino from 'src/pages/Casino';
import Lobby from 'src/pages/Casino/Lobby';
import PlayBoard from 'src/pages/Casino/PlayBoard';
import TypeBoard from 'src/pages/Casino/TypeBoard';

import Promotion from 'src/pages/Promotion';
import PromotionDetail from 'src/pages/Promotion/Detail';
import ErrorBoundary from 'src/pages/Error/ErrorBoundary';
import UpdateInfo from 'src/pages/Auth/UpdateInfo';

export const coreRouter = createBrowserRouter([
  {
    path: '/auth',
    element: <Auth />,
  },
  {
    path: '/update-info',
    element: <UpdateInfo />
  },
  {
    path: '/onboarding',
    element: <Onboarding />,
  },
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '',
        index: true,
        element: <Landing />
      },
      {
        path: '/sports',
        element: <Sports />,
        children: [
          { index: true, path: '', element: <AllSports /> },
          { path: 'live', element: <LiveSports /> },
          { path: 'bet-history', element: <BetHistory /> },
          { path: ':type', element: <ASport /> },
          { path: ':type/:competition', element: <Competition /> },
          { path: ':type/:competition/:match', element: <Match /> },
        ],
      },
      {
        path: '/casino',
        element: <Casino />,
        children: [
          { index: true, path: '', element: <Lobby /> },
          { path: 'play/:item', element: <PlayBoard /> },
          { path: ':type', element: <TypeBoard /> },
        ],
      },
      {
        path: '/esports',
        element: <Esports />,
        children: [
          { index: true, path: '', element: <AllEsports /> },
          { path: 'live', element: <LiveEsports /> },
          { path: ':type', element: <AEsport /> },
          { path: ':type/:competition', element: <ECompetition /> },
          { path: ':type/:competition/:match', element: <EMatch /> },
        ],
      },
      {
        path: '/promotions',
        element: <Promotion />,
      },
      {
        path: '/promotions/:id',
        element: <PromotionDetail />,
      },
    ],
  },
]);
