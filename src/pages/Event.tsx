import { gql, useQuery } from '@apollo/client';
import { Header } from '../components/Header';
import { Lesson } from '../components/Lesson';
import { Sidebar } from '../components/Sidebar';
import { Video } from '../components/Video';

export function Event() {
  return (
    <div>
      <Header />
      <Lesson />
      <Sidebar />
      <Video />
    </div>
  )
}

