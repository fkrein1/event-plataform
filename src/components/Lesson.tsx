import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { MenuContext } from '../context/MenuContext';
import { useContext } from 'react';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();
  const { setToggle } = useContext(MenuContext);

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'MMM d' • 'k'h'mm",
  );

  const isActiveLesson = slug === props.slug;

  return (
    <Link
      to={`/event/lesson/${isLessonAvailable ? props.slug : slug}`}
      className="group"
      onClick={() => setToggle(false)}
    >
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={classNames(
          'rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500',
          {
            'bg-green-500': isActiveLesson,
          },
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable && (
            <span
              className={classNames(
                'text-sm text-blue-500 font-medium flex items-center gap-2',
                {
                  'text-white': isActiveLesson,
                },
              )}
            >
              <CheckCircle size={20} />
              Released content
            </span>
          )}

          {!isLessonAvailable && (
            <span
              className={classNames(
                'text-sm text-orange-500 font-medium flex items-center gap-2',
                {
                  'text-white': isActiveLesson,
                },
              )}
            >
              <Lock size={20} />
              Coming soon
            </span>
          )}

          <span
            className={classNames(
              'text-xs rounded px-2 py-[2px] text-white border border-green-300 font-bold',
              {
                'border-white': isActiveLesson,
              },
            )}
          >
            {props.type === 'live' ? 'LIVE' : 'CLASS'}
          </span>
        </header>

        <strong
          className={classNames('mt-5 block', {
            'text-white': isActiveLesson,
            'text-gray-200': !isActiveLesson,
          })}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
