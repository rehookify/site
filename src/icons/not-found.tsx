import React, { FC, SVGAttributes } from 'react';

import { SVG } from '~/components/svg';

export const NotFoundIcon: FC<SVGAttributes<HTMLOrSVGElement>> = (props) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 478 332"
    {...props}
  >
    <path
      fill="currentColor"
      d="M67.438 207.5v-21.313L120.874 102h18.375v29.5h-10.875l-33.688 53.313v.999h75.938V207.5H67.437Zm61.437 22.5v-29l.5-9.438V102h25.375v128h-25.875Zm109.969 2.812c-10.75-.041-20-2.687-27.75-7.937-7.709-5.25-13.646-12.854-17.813-22.813-4.125-9.958-6.166-21.937-6.125-35.937 0-13.958 2.063-25.854 6.188-35.688 4.166-9.833 10.104-17.312 17.812-22.437 7.75-5.167 16.979-7.75 27.688-7.75 10.708 0 19.916 2.583 27.625 7.75 7.75 5.167 13.708 12.667 17.875 22.5 4.166 9.792 6.229 21.667 6.187 35.625 0 14.042-2.083 26.042-6.25 36-4.125 9.958-10.041 17.562-17.75 22.812-7.708 5.25-16.937 7.875-27.687 7.875Zm0-22.437c7.333 0 13.187-3.688 17.562-11.063 4.375-7.375 6.542-18.437 6.5-33.187 0-9.708-1-17.792-3-24.25-1.958-6.458-4.75-11.313-8.375-14.563-3.583-3.25-7.812-4.874-12.687-4.874-7.292 0-13.125 3.645-17.5 10.937s-6.584 18.208-6.625 32.75c0 9.833.979 18.042 2.937 24.625 2 6.542 4.813 11.458 8.438 14.75 3.625 3.25 7.875 4.875 12.75 4.875Zm69.047-2.875v-21.313L361.328 102h18.375v29.5h-10.875l-33.687 53.313v.999h75.937V207.5H307.891Zm61.437 22.5v-29l.5-9.438V102h25.375v128h-25.875Z"
    />
    <path
      stroke="currentColor"
      strokeWidth="28"
      d="M348 318h116V14H348M130 14H14v304h116"
    />
  </SVG>
);