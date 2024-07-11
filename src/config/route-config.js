import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from '../components/pages/Home';
import RootLayout from '../components/layout/RootLayout';
import ErrorPage from '../components/pages/ErrorPage';
import Events from '../components/pages/Events';
import EventDetail, { loader as eventDetailLoader, action as deleteAction } from '../components/pages/EventDetail';
import EventLayout from '../components/layout/EventLayout';
import NewEvent from '../components/pages/NewEvent';
import EditPage from '../components/pages/EditPage';
import { action as manipulateAction } from '../components/components/EventForm';
import SignUpPage from '../components/pages/SignUpPage';
import WelcomePage from '../components/pages/WelcomePage';

// 라우터 설정
const eventsRouter = [
  { 
    index: true, 
    element: <Events />,
    // loader: eventListLoader,
  },
  { 
    path: ':eventId', 
    loader: eventDetailLoader,
    // element: <EventDetail />,
    // loader가 children에게 직접적으로 연결되지 않아
    // EventDetail에서 loader를 사용하지 못하고 있음.
    id: 'event-detail', // loader에게 ID 부여
    children: [
      { 
        index: true, 
        element: <EventDetail />,
        action: deleteAction
       },
      { 
        path: 'edit',
        element: <EditPage />,
        action: manipulateAction 
      },
    ]
  },
  { 
    path: 'new', 
    element: <NewEvent />,
    // 서버에 갱신데이터요청을 보낼 때 트리거
    action: manipulateAction
  },
];

const homeRouter = [

  {
    index: true,
    element: <WelcomePage />
  }, // 웰컴 페이지 (로그인화면 or 로그인완료화면)
  {
    path: 'sign-up',
    element: <SignUpPage />
  } // 회원가입 페이지
];

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { 
        index: '/', 
        element: <Home />,
        children: homeRouter
      },
      {
        path: 'events',
        element: <EventLayout />,
        children: eventsRouter
      },
    ]
  },
]);
