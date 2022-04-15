import { NormalizedCacheObject } from '@apollo/client';
import type { DeviceType } from './contexts/AppContext';

type LocaleNS = 'common' | 'footer';
export type LangSupport = 'en' | 'vi';
export type ApolloPageProps = {
  initialApolloState?: NormalizedCacheObject;
  lang?: LangSupport;
  errorCode?: number | undefined | null;
  namespacesRequired?: LocaleNS[];
  clientHint?: {
    deviceMemory?: string | null;
    ect?: string | null;
  };
  deviceType?: DeviceType;
  [key: string]: any;
};
