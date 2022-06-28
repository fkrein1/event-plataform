import classNames from 'classnames';
import { useContext } from 'react';
import { Logo } from '../assets/Logo';
import { ToggleClose } from '../assets/ToggleClose';
import { ToggleOpen } from '../assets/ToggleOpen';
import { MenuContext } from '../context/MenuContext';

export function Header() {
  const { toggle, setToggle } = useContext(MenuContext);

  return (
    <header className="w-full py-2 px-6 flex items-center justify-between md:justify-center bg-gray-700 border-b border-gray-600">
      <div>
        <Logo />
      </div>
      <div
        className={classNames('md:hidden flex items-center gap-2', {
          hidden: toggle,
        })}
        onClick={() => setToggle(!toggle)}
      >
        <span>Aulas</span>
        <ToggleOpen />
      </div>
      <div
        className={classNames('md:hidden flex items-center gap-2', {
          hidden: !toggle,
        })}
        onClick={() => setToggle(!toggle)}
      >
        <span>Aulas</span>
        <ToggleClose />
      </div>
    </header>
  );
}
