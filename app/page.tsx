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
      <div className='w-11/12 space-y-15 rounded-r-2xl bg-acc1 px-25 py-11 text-texts'>
        <div className='flex items-end gap-11'>
          <h1 className='text-6xl font-bold'>Philosophy</h1>
          <p className='text-2xl font-bold'>作品制作への想い</p>
        </div>
        <div className='mx-auto space-y-15 px-28'>
          <p className='mx-auto w-fit text-center text-7xl font-extrabold'>
            四方良しのWeb制作
          </p>
          <div className='mx-auto w-fit space-y-8 text-2xl font-bold'>
            <p>
              商売の世界において、「三方良し」という言葉があります。
              <br />
              売り手と買い手の満足はもちろんのこと、
              <br />
              社会貢献もできるのが良い商売であるということを指す言葉です。
            </p>
            <p>
              Web制作ではもう一人、「良し」になると嬉しい人がいます。
              <br />
              誰でしょうか？
            </p>
            <p>正解は私達、「作り手」です。</p>
            <p>
              Web制作においてはクライアント様が「売り手」、
              <br />
              エンドユーザ様が「買い手」、 <br />
              私達が「作り手」となり、
              <br />
              社会貢献も合わせて「四方良し」となるわけです。
            </p>
            <p>
              みんなが気持ちよく、心を一つに問題解決に向かっていける。
              <br />
              一緒に考えることができるエンジニアになりたいと考えています。
            </p>
          </div>
        </div>
        <Button>My Works</Button>
      </div>
    </main>
  );
}
