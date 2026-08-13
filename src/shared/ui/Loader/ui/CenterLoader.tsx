import { useDecodeText } from '../hooks/useDecodeText';

export const CenterLoader = () => {
  const text = useDecodeText('> SIGNAL SETTING_');
  return (
    <main className='mt-10 relative inline-block w-fit animate-cyber-corners'>
      <h3 className='text-6xl tracking-[12px] relative p-8 inline-block '>
        <span className='text-shadow-md text-shadow-mint/70 text-mint/70  animate-neon-hum'>
          {text}
        </span>
      </h3>
    </main>
  );
};
