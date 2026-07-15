"use client";

import React from 'react'

import { Authenticated, Unauthenticated} from 'convex/react';
import Chat from '@/components/Chat';

const Home = () => {

  return (
    <div>
      <Authenticated>
        <Chat />
      </Authenticated>
      <Unauthenticated>
        <p>Please sign in to create projects.</p>
      </Unauthenticated>
    </div>
  )
}

export default Home;