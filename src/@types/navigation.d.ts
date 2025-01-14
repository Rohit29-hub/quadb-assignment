import { IShow } from './api';

export type RootStackParamList = {
  Splash: undefined;
  MainApp: undefined;
  Details: { show: IShow };
};

export type TabParamList = {
  Home: undefined;
  Search: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}