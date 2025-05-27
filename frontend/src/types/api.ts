export enum EUseAPIReducerActionType {
  'REQUEST',
  'SUCCESS',
  'FAILURE',
}

export type TUseAPIReducerAction<T> =
  | { type: EUseAPIReducerActionType.REQUEST }
  | { type: EUseAPIReducerActionType.SUCCESS; results: T }
  | { type: EUseAPIReducerActionType.FAILURE; error: unknown };

export interface IFetchState<T> {
  isLoading: boolean;
  data: T | null;
  error: unknown;
}
