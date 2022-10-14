import React from 'react';
import RecoilRoot  from 'recoil';
import Main from './pages/main';

export default function App() {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  );
}