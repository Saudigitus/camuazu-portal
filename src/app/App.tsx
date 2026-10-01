import React from 'react';
import { Layout } from '@/layout/Layout';
import { Router } from '@/routes/Routes';

export default function App() {
  return (
    <React.Fragment>
      <Layout>
        <Router />
      </Layout>
    </React.Fragment>
  );
}
