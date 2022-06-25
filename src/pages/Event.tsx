import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Video } from '../components/Video';

const GET_SLUGS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      slug
    }
  }
`;

interface GetLessonsQueryResponse {
  lessons: {
    slug: string;
  }[];
}

export function Event() {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_SLUGS_QUERY);
  const { slug } = useParams<{ slug: string }>();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 justify-center">
        {slug && <Video lessonSlug={slug} /> }
        {!slug && data && <Video lessonSlug={data.lessons[0].slug} />}
        {!slug && !data && <div className="flex-1" />}
        <Sidebar />
      </main>
    </div>
  );
}
