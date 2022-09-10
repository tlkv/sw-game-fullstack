import CounterPage from 'pages/CounterPage/CounterPage';
import GamePage from 'pages/GamePage/GamePage';
import MainPage from 'pages/MainPage/MainPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import StatsPage from 'pages/StatsPage/StatsPage';
import { Navigate } from 'react-router-dom';

const ROUTES_LIST = [
  { path: '/', component: <GamePage /> },
  { path: '/stats', component: <StatsPage /> },
  { path: '/404', component: <NotFoundPage /> },
  { path: '/counter', component: <CounterPage /> }, // rm
  { path: '/main', component: <MainPage /> }, // rm
  { path: '*', component: <Navigate to="/404" /> },
];

export default ROUTES_LIST;
