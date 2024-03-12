import * as Icon from '@/components/icons';
import { Button } from '@/components/ui/button';
import { lineFont } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex fixed top-0 left-0 items-center justify-between w-dvw py-10 px-15'>
      <Link href={'/'}>
        <Icon.Logo />
      </Link>
      <div
        className={cn(
          'flex items-center gap-10',
          `${lineFont.className}`
        )}>
        <Button
          className='text-lg duration-300 hover:text-acc1'
          variant={'link'}
          asChild>
          <Link href={'/works'}>Works</Link>
        </Button>
        <Button
          className='text-lg duration-300 hover:text-acc2'
          variant={'link'}
          asChild>
          <Link href={'/about'}>About</Link>
        </Button>
        <Button
          className='text-lg duration-300 hover:text-main'
          variant={'link'}
          asChild>
          <Link href={'skills'}>Skills</Link>
        </Button>
        <Button asChild className='flex items-center gap-2'>
          <Link href={'/contact'}>
            Contact
            <Icon.Mail />
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
