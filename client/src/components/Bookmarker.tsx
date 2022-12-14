import { FC } from 'react';

interface BookmarkerProp {
  isTrue: boolean;
}

export const Bookmarker: FC<BookmarkerProp> = ({
  isTrue,
}): JSX.Element => {
  return (
    <svg
      className={`icon w-5 h-5 ${
        isTrue ? 'fill-red-secondary' : 'fill-white'
      }`}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2905"
      width="64"
      height="64"
    >
      <path
        d="M682.666667 85.333333H341.333333a128 128 0 0 0-128 128v682.666667a42.666667 42.666667 0 0 0 21.333334 37.12 42.666667 42.666667 0 0 0 42.666666 0l234.666667-135.68 234.666667 135.68a42.666667 42.666667 0 0 0 21.333333 5.546667 42.666667 42.666667 0 0 0 21.333333-5.546667A42.666667 42.666667 0 0 0 810.666667 896V213.333333a128 128 0 0 0-128-128z m42.666666 736.853334l-192-110.933334a42.666667 42.666667 0 0 0-42.666666 0L298.666667 822.186667V213.333333a42.666667 42.666667 0 0 1 42.666666-42.666666h341.333334a42.666667 42.666667 0 0 1 42.666666 42.666666z"
        p-id="2906"
      ></path>
    </svg>
  );
};
