import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Video } from '../components/Video';
import { useGetSlugQuery } from '../graphql/generated';

export function Event() {
  const { data } = useGetSlugQuery();
  const { slug } = useParams<{ slug: string }>();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 justify-center">
        {slug && <Video lessonSlug={slug} />}
        {!slug && data && <Video lessonSlug={data.lessons[0].slug} />}
        {!slug && !data && <div className="flex-1" />}
        <Sidebar />
      </main>
    </div>
  );
}
