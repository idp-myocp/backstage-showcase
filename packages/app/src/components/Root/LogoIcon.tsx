import { styled } from '@mui/material/styles';
import React from 'react';

const Svg = styled('svg')`
  width: auto;
  height: 28px;
`;

const LogoIcon = (props: React.ComponentProps<typeof Svg>) => {
  return (
    <Svg
      viewBox="0 0 335 340"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_1_11)">
        <path
          d="M334.669 150.973V165.548C321.583 165.548 312.414 168.291 307.164 173.776C301.992 179.262 299.406 188.43 299.406 201.281V238.895C299.406 249.709 298.348 259.073 296.233 266.988C294.195 274.902 290.826 281.445 286.124 286.617C281.422 291.789 275.153 295.629 267.317 298.136C259.481 300.644 249.803 301.898 238.284 301.898V278.859C247.374 278.859 254.505 277.41 259.677 274.51C264.927 271.689 268.61 267.34 270.726 261.463C272.92 255.586 274.017 248.063 274.017 238.895V191.878C274.017 185.766 274.801 180.202 276.368 175.187C278.013 170.172 280.991 165.862 285.301 162.257C289.611 158.652 295.723 155.871 303.638 153.912C311.631 151.953 321.974 150.973 334.669 150.973ZM238.284 0.98862C249.803 0.98862 259.481 2.24241 267.317 4.75C275.153 7.25757 281.422 11.0973 286.124 16.2692C290.826 21.441 294.195 27.9842 296.233 35.8988C298.348 43.8133 299.406 53.1775 299.406 63.9915V101.605C299.406 114.456 301.992 123.625 307.164 129.11C312.414 134.595 321.583 137.338 334.669 137.338V151.913C321.974 151.913 311.631 150.934 303.638 148.975C295.723 147.016 289.611 144.234 285.301 140.629C280.991 137.025 278.013 132.715 276.368 127.7C274.801 122.684 274.017 117.121 274.017 111.009V63.9915C274.017 54.8231 272.92 47.3004 270.726 41.4233C268.61 35.4678 264.927 31.0795 259.677 28.2585C254.505 25.4375 247.374 24.027 238.284 24.027V0.98862ZM334.669 137.338V165.548H306.929V137.338H334.669Z"
          fill="#009596"
        />
        <path
          d="M0.751818 188.725L0.798645 174.15C13.885 174.192 23.0621 171.479 28.3299 166.011C33.5194 160.542 36.1348 151.382 36.1761 138.531L36.2969 100.917C36.3316 90.1034 37.4196 80.7427 39.5608 72.835C41.6236 64.927 45.0142 58.3947 49.7325 53.2379C54.4508 48.0812 60.732 44.2616 68.5762 41.7792C76.4204 39.2968 86.102 38.0742 97.6212 38.1112L97.5471 61.1494C88.4572 61.1202 81.3217 62.547 76.1405 65.4297C70.8812 68.2339 67.1843 72.5711 65.0497 78.4414C62.8367 84.3114 61.7154 91.8306 61.686 100.999L61.5349 148.016C61.5153 154.128 60.7138 159.689 59.1304 164.699C57.4687 169.709 54.4772 174.009 50.1557 177.6C45.8343 181.191 39.7131 183.953 31.7923 185.887C23.7932 187.82 13.4464 188.766 0.751818 188.725ZM96.6544 339.019C85.1353 338.982 75.4617 337.697 67.6336 335.164C59.8055 332.631 53.549 328.772 48.8639 323.585C44.1788 318.398 40.8303 311.844 38.8183 303.923C36.728 296.001 35.7002 286.634 35.735 275.82L35.8558 238.206C35.8971 225.355 33.3406 216.179 28.1864 210.677C22.9538 205.174 13.7944 202.402 0.708012 202.36L0.754839 187.785C13.4494 187.826 23.7899 188.839 31.7765 190.823C39.6847 192.808 45.7879 195.609 50.0862 199.228C54.3845 202.846 57.3484 207.166 58.9779 212.186C60.529 217.206 61.2947 222.772 61.2751 228.885L61.124 275.901C61.0946 285.07 62.1675 292.596 64.3427 298.48C66.4393 304.442 70.1082 308.842 75.3494 311.68C80.5121 314.518 87.6385 315.951 96.7284 315.98L96.6544 339.019ZM0.708012 202.36L0.798645 174.15L28.5386 174.239L28.4479 202.449L0.708012 202.36Z"
          fill="#009596"
        />
        <path d="M97 87V290H241" stroke="#009596" strokeWidth="24" />
        <path
          d="M238.214 253.462L238.867 50.4627L94.8673 50.0001"
          stroke="#009596"
          strokeWidth="24"
        />
        <path
          d="M240.977 327.471L88.9773 326.983"
          stroke="#009596"
          strokeWidth="24"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_11">
          <rect width="335" height="340" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default LogoIcon;