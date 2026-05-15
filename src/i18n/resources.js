import { commonEn } from './common/en';
import { commonFa } from './common/fa';
import { courseEn } from './course/en';
import { courseFa } from './course/fa';

export const commonResources = {
  fa: commonFa,
  en: commonEn,
};

export const courseResources = {
  fa: courseFa,
  en: courseEn,
};

export const resources = {
  fa: {
    common: commonFa,
    course: courseFa,
  },
  en: {
    common: commonEn,
    course: courseEn,
  },
};