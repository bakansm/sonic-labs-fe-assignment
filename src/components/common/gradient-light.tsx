export function GradLight() {
  return (
    <svg
      aria-hidden='true'
      className='absolute top-0 left-0 h-50 w-full rotate-x-180 opacity-80'
      focusable='false'
      height='200'
      preserveAspectRatio='none'
      role='presentation'
      viewBox='0 0 100 200'
      width='100%'
    >
      <defs>
        <linearGradient id='grad-light' x1='0%' x2='100%' y1='0%' y2='0%'>
          <stop stopColor='#102D3C'></stop>
          <stop offset='0.161465' stopColor='#214E81'></stop>
          <stop offset='0.363625' stopColor='#506179'></stop>
          <stop offset='0.651499' stopColor='#ED5409'></stop>
          <stop offset='1' stopColor='#FFCB67'></stop>
        </linearGradient>
        <linearGradient id='grad-dark' x1='0%' x2='100%' y1='0%' y2='0%'>
          <stop stopColor='#FFCB67'></stop>
          <stop offset='0.161465' stopColor='#ED5409'></stop>
          <stop offset='0.363625' stopColor='#506179'></stop>
          <stop offset='0.651499' stopColor='#214E81'></stop>
          <stop offset='1' stopColor='#102D3C'></stop>
        </linearGradient>
        <mask id='rectanglesMask'>
          <line stroke='white' strokeWidth='1' x1='0' x2='100' y1='0' y2='0'></line>
          <line stroke='white' strokeWidth='1' x1='0' x2='100' y1='10' y2='10'></line>
          <line stroke='white' strokeWidth='1.5' x1='0' x2='100' y1='20' y2='20'></line>
          <line stroke='white' strokeWidth='2' x1='0' x2='100' y1='30' y2='30'></line>
          <line stroke='white' strokeWidth='2.5' x1='0' x2='100' y1='40' y2='40'></line>
          <line stroke='white' strokeWidth='3' x1='0' x2='100' y1='50' y2='50'></line>
          <line stroke='white' strokeWidth='3.5' x1='0' x2='100' y1='60' y2='60'></line>
          <line stroke='white' strokeWidth='4' x1='0' x2='100' y1='70' y2='70'></line>
          <line stroke='white' strokeWidth='4.5' x1='0' x2='100' y1='80' y2='80'></line>
          <line stroke='white' strokeWidth='5' x1='0' x2='100' y1='90' y2='90'></line>
          <line stroke='white' strokeWidth='5.5' x1='0' x2='100' y1='100' y2='100'></line>
          <line stroke='white' strokeWidth='6' x1='0' x2='100' y1='110' y2='110'></line>
          <line stroke='white' strokeWidth='6.5' x1='0' x2='100' y1='120' y2='120'></line>
          <line stroke='white' strokeWidth='7' x1='0' x2='100' y1='130' y2='130'></line>
          <line stroke='white' strokeWidth='7.5' x1='0' x2='100' y1='140' y2='140'></line>
          <line stroke='white' strokeWidth='8' x1='0' x2='100' y1='150' y2='150'></line>
          <line stroke='white' strokeWidth='8.5' x1='0' x2='100' y1='160' y2='160'></line>
          <line stroke='white' strokeWidth='9' x1='0' x2='100' y1='170' y2='170'></line>
          <line stroke='white' strokeWidth='9.5' x1='0' x2='100' y1='180' y2='180'></line>
          <line stroke='white' strokeWidth='10' x1='0' x2='100' y1='190' y2='190'></line>
          <line stroke='white' strokeWidth='10.5' x1='0' x2='100' y1='200' y2='200'></line>
        </mask>
      </defs>
      <rect
        className='fill-[url(#grad-light)] theme-dark:fill-[url(#grad-dark)]'
        height='100%'
        mask='url(#rectanglesMask)'
        width='100%'
      ></rect>
    </svg>
  );
}
