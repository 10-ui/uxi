import * as Icon from '@/components/icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex items-center justify-between w-dvw py-10 px-15'>
      <Icon.Logo />
      <div className='flex items-center gap-10'>
        <Button variant={'link'} asChild>
          <Link href={'#'}>Works</Link>
        </Button>
        <Button variant={'link'} asChild>
          <Link href={'#'}>About</Link>
        </Button>
        <Button variant={'link'} asChild>
          <Link href={'#'}>Skills</Link>
        </Button>
        <Button asChild className='flex items-center gap-2'>
          <Link href={'#'}>
            Contact
            <Icon.Mail />
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
