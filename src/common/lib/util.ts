import { Gender } from '../enum';

export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * min이상 max이하의 랜덤한 정수가 반환됩니다.
 *
 * @param min
 * @param max
 * @returns
 */
export const randomInt = (min: number, max: number) => {
  const ceiledMin = Math.ceil(min);
  const flooredMax = Math.floor(max);
  return Math.floor(Math.random() * (flooredMax - ceiledMin + 1)) + ceiledMin;
};

export const getGender = (gender?: string) => {
  const firstLetter = gender?.toUpperCase()[0];
  switch (firstLetter) {
    case 'F':
      return Gender.FEMALE;
    case 'M':
      return Gender.MALE;
  }
  return Gender.UNKNOWN;
};
