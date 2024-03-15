import * as Icon from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className='fixed left-0 top-0 z-10 flex w-screen items-center justify-between px-15 py-10'>
      <Link href={"/"}>
        <Icon.Logo />
      </Link>
      <div className='flex items-center gap-10'>
        <Button
          className='text-lg duration-300 hover:text-acc1'
          variant={"link"}
          asChild>
          <Link href={"/works"}>Works</Link>
        </Button>
        <Button
          className='text-lg duration-300 hover:text-acc2'
          variant={"link"}
          asChild>
          <Link href={"skills"}>Skills</Link>
        </Button>
        <Button
          asChild
          className='flex items-center gap-2 bg-main hover:bg-main/70'>
          <Link href={"/contact"}>
            Contact
            <Icon.Mail />
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
