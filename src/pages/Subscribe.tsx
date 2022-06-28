import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../assets/Logo';
import {
  useCreateSubscriberMutation,
  useGetSlugQuery,
} from '../graphql/generated';

export function Subscribe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { data } = useGetSlugQuery()
  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();
    await createSubscriber({
      variables: {
        name,
        email,
      },
    });
    ;
    if (data) navigate(`/event/lesson/${data.lessons[0].slug}`);
    else navigate('/event');
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex">
      <div className="flex flex-col mt-10 mx-10 justify-items-center sm:mx-40 gap-8">
        <div className="max-w-[540px] flex flex-col">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Checkout my{' '}
            <strong className="text-blue-500">favorite recipes</strong> from{' '}
            <strong className="text-blue-500">Binging with Babish</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            A cooking show dedicated to discovering what the delectable (and
            occasionally horrible) foods from fiction actually taste like.
          </p>
        </div>

        <div className="max-w-[390px] p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Register</strong>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              secure my spot
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
