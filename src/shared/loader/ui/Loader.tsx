import { MatrixRain } from '../lib/MatrixRain';

interface LoaderPropsInterface {
  userName?: string;
}

export const Loader = ({ userName }: LoaderPropsInterface) => {
  return (
    <div
      className='w-full flex flex-col justify-center h-dvh bg-zinc-950 bg-[linear-gradient(rgba(45,212,191,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.15)_1px,transparent_1px)] bg-[size:8px_8px] fixed text-mint px-20 py-10 font-michroma
  before:content-[""] before:fixed before:inset-0 before:pointer-events-none before:z-50 before:bg-[radial-gradient(circle_at_center,_transparent_890%,_rgba(0,0,0,0.95)_100%)]
  after:content-[""] after:fixed after:inset-0 after:pointer-events-none after:z-50 after:shadow-[inset_0_0_150px_rgba(0,0,0,1)]'
    >
      <header className='uppercase'>
        <div className='flex justify-between'>
          <div className='flex mb-5 items-center'>
            <h4 className='text-2xl tracking-wider text-shadow-mint/50 text-mint/50 '>
              User: {userName ?? 'UNKNOWN'}
            </h4>
            <div className='text-lg text-zinc-950 bg-mint/90 inline-block ml-7 p-1 max-h-6 shadow-xs shadow-mint'>
              <p className='-mt-1.5 font-orbitron pl-3'>01</p>
            </div>
          </div>

          <div>
            <div className='w-56 h-px bg-mint/70'></div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='34px'
              viewBox='0 -960 960 960'
              width='34px'
              className='fill-mint/50 -ml-2'
            >
              <path d='m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z' />
            </svg>
          </div>
          <div className='flex'>
            <div className='w-12 h-px bg-mint/50 mr-7'></div>
            <div className='w-12 h-px bg-mint shadow-sm shadow-mint'></div>
          </div>
          <div></div>
        </div>

        <div className='flex  text-zinc-950'>
          <div className='w-16 h-6 bg-mint/50 mr-25 font-bold'>FREQ</div>
          <div className='w-56 h-6 bg-mint/50 mr-3'></div>
          <div className='w-1 h-6 bg-mint/50 mr-7'></div>
          <div className='relative ml-2'>
            <span className='absolute z-100 left-7 font-bold'>
              COM_INTERFACE_V2.1
            </span>

            <div className='w-96 h-6 bg-mint/50 -skew-x-67'></div>
          </div>

          <div className='relative ml-8 '>
            <span className='absolute z-10 left-7 font-bold'>MODE: TRK</span>
            <div className='w-53 h-6 bg-mint/50 -skew-x-67'></div>
          </div>
        </div>
      </header>
      <main className='mt-10 relative inline-block'>
        <div className='absolute top-0 w-4 h-4 border-t-2 border-l-2 border-t-mint border-l-mint'></div>
        <div className='absolute bottom-0 w-4 h-4 border-b-2 border-l-2 border-b-mint border-l-mint'></div>
        <div className='absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-t-mint border-r-mint'></div>
        <div className='absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-b-mint border-r-mint'></div>
        <h3 className='text-6xl tracking-[12px] relative p-8 inline-block'>
          <span className='text-mint/65'>{'>'}</span>
          <span className='text-shadow-md text-shadow-mint/70 text-mint/70'>
            SIGNAL
          </span>
          <span className='text-shadow-lg text-shadow-mint'> SETTING_</span>
        </h3>
      </main>
      <div className='flex space-x-2.5 my-12'>
        <div className='w-3 h-9 bg-mint/20 border border-mint/40'></div>
        <div className='w-3 h-9 bg-mint  border border-mint'></div>
        <div className='w-3 h-9 bg-mint border border-mint'></div>
        <div className='w-3 h-9 bg-mint/20 border border-mint/40'></div>
        <div className='w-3 h-9 bg-mint/20 border border-mint/40'></div>
        <div className='w-3 h-9 bg-mint/20 border border-mint/40'></div>
      </div>
      <div
        className='bg-black w-1/5 h-55 absolute 
      shadow-[0_0_15px_rgba(var(--mint-rgb),0.3)]
      z-5 top-5/12 right-1/6  outline-mint outline-2'
      >
        <div className='absolute w-1/4 h-3 -top-1.5 left-[35%] z-20 shadow-lg shadow-mint/90'></div>
        <div className='w-1/4 h-3 -top-1.5 left-[35%] z-10 bg-mint [clip-path:polygon(100%_100%,0%_100%,10%_0%,90%_0%)] absolute'></div>
        <div className='w-10 bg-zinc-950 bg-[linear-gradient(rgba(45,212,191,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.15)_1px,transparent_1px)] bg-[size:8px_8px] h-1/2 -bottom-0.5 -left-0.5 z-100 absolute border-t-2 border-r-2 border-mint bg-fixed'>
          <div className='w-11/12 h-2.5 bg-mint my-1 shadow-lg shadow-mint/70'></div>
          <div className='w-11/12 h-2.5 bg-mint my-2 shadow-lg shadow-mint/70'></div>
          <div className='w-11/12 h-2.5 bg-mint my-2 shadow-lg shadow-mint/70'></div>
          <div className='w-11/12 h-2.5 bg-mint my-2 shadow-lg shadow-mint/70'></div>
          <div className='w-11/12 h-2.5 bg-mint my-2 '></div>
        </div>
        <div className='absolute w-7 h-7 shadow-xl shadow-mint right-0 bottom-4'></div>

        <div
          className='absolute z-100 w-7 h-7 bg-zinc-950 bg-[linear-gradient(rgba(45,212,191,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.15)_1px,transparent_1px)] bg-[size:8px_8px] filter
        [clip-path:polygon(100%_0%,_0%_0%,_100%_100%)] -top-1 -right-1 border-mint
        before:block before:absolute before:w-0.5 before:h-[100%] before:bg-mint before:z-120
        before:-top-[0.5px] before:right-2.5 before:-rotate-45  bg-fixed
        c
        '
        ></div>
        <div
          className='absolute z-100 w-7 h-7 bg-zinc-950 bg-[linear-gradient(rgba(45,212,191,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.15)_1px,transparent_1px)] bg-[size:8px_8px] filter
        [clip-path:polygon(0%_0%,_0%_100%,_100%_100%)] -bottom-1 left-[35px] before:block before:absolute before:w-0.5 before:h-[120%] before:-rotate-45 before:bg-mint before:-top-0.5 before:right-[15px] before:z-120'
        ></div>
        <div
          className='absolute z-100 w-7 h-7 bg-mint filter
        [clip-path:polygon(100%_0%,_0%_100%,_100%_100%)] right-1 bottom-1'
        ></div>
        <MatrixRain
          color='#8cebdc'
          fontSize={12}
          speed={70}
        />
        <div className='w-1/3 h-2 -bottom-1 left-1/3 bg-mint absolute z-10 shadow-md shadow-mint/70'></div>
      </div>

      <footer className='flex justify-between mb-6'>
        <div className='flex items-center'>
          <div className='border-mint/20 border-5 p-5'>
            <div className='flex justify-between text-mint/50 text-xs'>
              <div className='space-y-1.5'>
                <p>READING</p>
                <p>FNS (2-1)</p>
                <p>SYS</p>
              </div>
              <div className='space-y-1.5'>
                <p className='text-mint text-shadow-md text-shadow-mint'>
                  100%
                </p>
                <p>UPDATED</p>
                <p>STABLE</p>
              </div>
            </div>
            <div className='flex my-5'>
              <div className='text-6xl -mr-2 font-extrabold'>{'>'}</div>
              <div className='text-6xl -mr-2 font-extrabold'>{'>'}</div>
              <div className='text-6xl -mr-2 font-extrabold'>{'>'}</div>
              <div className='text-6xl -mr-2 font-extrabold'>{'>'}</div>
              <div className='text-6xl -mr-2 font-extrabold'>{'>'}</div>
              <div className='text-6xl -mr-2 font-extrabold'>{'>'}</div>
              <div className='text-6xl -mr-2 font-extrabold'>{'>'}</div>
              <div className='text-6xl -mr-2 font-extrabold'>{'>'}</div>
              <div className='text-6xl -mr-30 px-12 font-extrabold text-shadow-md text-shadow-mint'>
                {'>'}
              </div>
            </div>
            <div className='flex items-center mt-4'>
              <p className='text-lg tracking-wide'>SYSTEM ONLINE</p>
              <div
                className='bg-mint shadow-mint/60 shadow-md inline-block
              w-3 h-3 outline-mint/50 outline outline-offset-4 ml-4'
              ></div>
            </div>
          </div>
        </div>
        <div className='relative flex '>
          <div className='flex items-end mr-24'>
            <div className='w-50 h-32 space-y-3 bg-mint mr-10 text-zinc-950 p-4 font-bold text-xs'>
              <p> PACKET_LOSS: 0%</p>
              <p>SYS_MNT_77</p>
            </div>
            <div className='w-50 h-32 border-mint/60 border-4 font-bold text-xs p-4 text-mint/80 space-y-3'>
              <p>ZONE</p>
              <p>[ EXT_01 ]</p>
              <p>
                <span className='animate-pulse text-shadow-2xs text-shadow-mint mr-2'>
                  ▶
                </span>
                LIVE
              </p>
            </div>
          </div>
          <div className='w-42 h-42 border border-mint rounded-full relative flex justify-center items-center'>
            <div className='absolute h-px w-[140%] bg-mint'></div>
            <div className='absolute h-px w-[140%] bg-mint rotate-90 top-1/2'></div>
            <div className='w-1 h-1 bg-mint absolute rounded-full left-7 top-9 shadow-white shadow-sm'></div>
            <div
              className='absolute bottom-1/2 left-1/2 w-1/2 h-1/2 origin-bottom-left
             bg-linear-to-tl from-mint/70 via-mint/20 to-transparent rounded-tr-full animate-spin'
            ></div>
            <div className='w-9/12 h-9/12 border border-mint rounded-full relative flex justify-center items-center'>
              <div className='w-9/12 h-9/12 border border-mint rounded-full relative flex justify-center items-center'>
                <div className='w-7/12 h-7/12 border border-mint rounded-full relative flex justify-center items-center'>
                  <div className='w-5/12 h-5/12 border border-mint rounded-full relative flex justify-center items-center'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='flex justify-between'>
        <div className='mt-2.5'>
          <span className='text-mint text-shadow-md text-shadow-mint'>
            STATUS
          </span>
          <div className='font-bold mt-1 px-2 py-0.5 tracking-wide text-lg  bg-mint/80 ml-0 relative  text-zinc-950'>
            Loading...
          </div>
        </div>
        <div className='flex text-zinc-950 mt-4 relative'>
          <div className='relative '>
            <span className='absolute z-100 left-7 font-bold'>
              NET_CONNECTING...
            </span>
            <div className='w-xl h-6 bg-mint/70 -skew-x-62'></div>
          </div>
          <div className='w-53 h-6 bg-mint/70 -skew-x-62 mx-8'></div>
          <div className='w-3 h-6 bg-mint/70'></div>
          <div className='relative ml-8 '>
            <span className='absolute z-10 left-7 font-bold'>[0x00F3A]</span>
            <div className='w-53 h-6 bg-mint/70 '></div>
          </div>
        </div>
      </div>
    </div>
  );
};
