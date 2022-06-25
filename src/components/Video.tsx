import {
  CaretRight,
  FileArrowDown,
  Image,
  InstagramLogo,
  YoutubeLogo,
} from 'phosphor-react';
import { gql, useQuery } from '@apollo/client';

const GET_LESSON_BY_SLUG = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      videoId
      slug
      title
      description
      teacher {
        bio
        avatarURL
        name
      }
    }
  }
`;
interface VideoProps {
  lessonSlug: string;
}

interface GetLessonQueryResponse {
  lesson: {
    videoId: string;
    slug: string;
    title: string;
    description: string;
    teacher: {
      bio: string;
      avatarURL: string;
      name: string;
    };
  };
}

export function Video(props: VideoProps) {
  const { data } = useQuery<GetLessonQueryResponse>(GET_LESSON_BY_SLUG, {
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (!data) {
    return <div className="flex-1"></div>;
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[900px] max-h-[70vh] aspect-video">
          <iframe
            className="h-full w-full max-w-[900px] max-h-[70vh] aspect-video"
            src={`https://www.youtube.com/embed/${data.lesson.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className="p-8 max-w-[900px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src={data.lesson.teacher.avatarURL}
                alt="felipe"
              />

              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  {data.lesson.teacher.name}
                </strong>
                <span className="text-gray-200 text-sm block">
                  {data.lesson.teacher.bio}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="https://www.youtube.com/c/bingingwithbabish"
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2  justify-center hover:bg-green-700 transition-colors"
            >
              <YoutubeLogo size={24} />
              YouTube Channel
            </a>
            <a
              href="https://www.instagram.com/bingingwithbabish/"
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2  justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <InstagramLogo size={24} />
              Instagram
            </a>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2">
          <a
            href="#"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed ">
              <strong className="text-2xl">Recipes</strong>
              <p className="text-sm text-gray-200 mt-2">
                Access our supplemental material to accelerate your cooking
                skills
              </p>
            </div>
            <div className="h-full flex p-6 items-center">
              <CaretRight size={24} />
            </div>
          </a>

          <a
            href="#"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <Image size={40} />
            </div>
            <div className="py-6 leading-relaxed ">
              <strong className="text-2xl">Wallpapers</strong>
              <p className="text-sm text-gray-200 mt-2">
                Download exclusive Food Lab wallpapers and customize your screen
              </p>
            </div>
            <div className="h-full flex p-6 items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
