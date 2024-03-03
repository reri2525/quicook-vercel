import React from 'react';
import Header from '@/components/common/header/Header';
import SideBar from '@/components/common/sidebar/SideBar';
import RootLayout from './layout';
import '@/styles/globals.css';

export default function Home() {
  return (
    <RootLayout>
      <Header />
      <SideBar />
    </RootLayout>
  );
}
