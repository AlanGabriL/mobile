import React from 'react';
import Signin from './pages/Signin';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <Signin />
      <StatusBar style="light" />
    </>
  );
}
