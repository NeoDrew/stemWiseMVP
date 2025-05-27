import { useCallback, useEffect, useReducer } from 'react';

import {
  EUseAPIReducerActionType,
  IFetchState,
  TUseAPIReducerAction,
} from 'types';

export function useApi<T>(
  request: Request,
  shouldTriggerImmediately: boolean,
): IFetchState<T> & { execute: () => void } {
  const initialState: IFetchState<T> = {
    isLoading: false,
    data: null,
    error: null,
  };

  function reducer(
    state: IFetchState<T>,
    action: TUseAPIReducerAction<T>,
  ): IFetchState<T> {
    switch (action.type) {
      case EUseAPIReducerActionType.REQUEST:
        return { ...initialState, isLoading: true };
      case EUseAPIReducerActionType.SUCCESS:
        return { ...initialState, data: action.results };
      case EUseAPIReducerActionType.FAILURE:
        return { ...initialState, error: action.error };
    }
  }

  const [{ isLoading, data, error }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  useEffect(() => {
    if (shouldTriggerImmediately) {
      execute();
    }
  }, [shouldTriggerImmediately]);

  const execute = useCallback(async () => {
    if (!isLoading) {
      try {
        dispatch({ type: EUseAPIReducerActionType.REQUEST });
        const data = await fetchData();
        dispatch({ type: EUseAPIReducerActionType.SUCCESS, results: data });
      } catch (error) {
        dispatch({ type: EUseAPIReducerActionType.FAILURE, error });
      }
    }
  }, [request]);

  const fetchData: () => Promise<T> = useCallback(async () => {
    const response = await fetch(request);
    if (!response.ok) {
      throw response.statusText;
    }
    return await response.json();
  }, [request]);

  return { isLoading, data, error, execute };
}

export default useApi;
