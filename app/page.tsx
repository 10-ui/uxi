import { TopImg } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className='select-none'>
      <div className='relative min-h-dvh w-screen'>
        <div className='mx-auto grid min-h-screen w-11/12 grid-cols-2 items-center justify-items-center'>
          <h1 className='text-5xl font-bold'>
            想いをカタチにできる、
            <br />
            そんなエンジニアへ
          </h1>
          <TopImg />
        </div>
        <div className='absolute bottom-10 right-15 flex animate-bounce flex-row gap-2'>
          <p className='text-sm [writing-mode:vertical-rl]'>
            <span className='text-acc1'>E</span>XP
            <span className='text-acc2'>L</span>OR
            <span className='text-main'>E</span>
          </p>
          <svg
            width='18'
            height='83'
            viewBox='0 0 18 83'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M1 1V81L17 63.8837'
              stroke='#0F172A'
              stroke-linecap='round'
            />
          </svg>
        </div>
      </div>
    </main>
  );
}
