import classNames from 'classnames';
import { useContext } from 'react';
import { MenuContext } from '../context/MenuContext';
import { useGetLessonsQuery } from '../graphql/generated';
import { Lesson } from './Lesson';

export function Sidebar() {
  const { data } = useGetLessonsQuery();
  const { toggle } = useContext(MenuContext);

  return (
    <aside className={classNames("md:w-[348px] bg-gray-700 p-6 border-1 border-gray-600 md:block", {
      'hidden': !toggle,
      'block': toggle,
      'w-full': toggle,
    })}>
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Class schedule
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  );
}
