"use client";

import { Button } from '@/components/ui/button';
import React from 'react'

import { Authenticated, Unauthenticated, useConvexAuth, useMutation, useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';

const Home = () => {
  const { isAuthenticated } = useConvexAuth();
  const projects = useQuery(api.projects.get, isAuthenticated ? {} : "skip");
  const createProject = useMutation(api.projects.create);

  return (
    <div>
      <Authenticated>
        <Button onClick={() => { createProject({ name: "New Project" }) }}>Add New</Button>

        <ul>
          {projects?.map((project) => (
            <li key={project._id}>{project.name} : {project.ownerId}</li>
          ))}
        </ul>
      </Authenticated>
      <Unauthenticated>
        <p>Please sign in to create projects.</p>
      </Unauthenticated>
    </div>
  )
}

export default Home;