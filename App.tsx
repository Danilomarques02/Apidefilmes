import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <>
      <Home/>
      <StatusBar style="light" translucent backgroundColor='#242a32' />
    </>
  );
}


