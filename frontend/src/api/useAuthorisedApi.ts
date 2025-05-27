import { useCallback, useEffect, useReducer } from 'react';

import {
  EUseAPIReducerActionType,
  IFetchState,
  TUseAPIReducerAction,
} from 'types';
import useGetAccessTokenSilently from 'utils/hooks/useGetAccessTokenSilently';

export function useAuthorisedApi<T>(
  request: Request,
  shouldTriggerImmediately: boolean,
): IFetchState<T> & { execute: () => void } {
  const { getAccessTokenSilently } = useGetAccessTokenSilently();

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

        const accessToken = await getAccessTokenSilently();

        const data = await fetchData(accessToken);
        dispatch({ type: EUseAPIReducerActionType.SUCCESS, results: data });
      } catch (error) {
        dispatch({ type: EUseAPIReducerActionType.FAILURE, error });
      }
    }
  }, [request]);

  const fetchData: (accessToken?: string | null) => Promise<T> = useCallback(
    async (accessToken) => {
      const headers = new Headers(request.headers);
      headers.append('Authorization', `Bearer ${accessToken}`);

      const authedRequest = new Request(request, { headers });
      const response = await fetch(authedRequest);

      if (!response.ok) {
        let errorMessage: string;
        try {
          errorMessage = await response.text();
        } catch (e) {
          errorMessage = `HTTP ${response.status}` + e;
        }
        throw new Error(errorMessage);
      }

      return await response.json();
    },
    [request],
  );

  return { isLoading, data, error, execute };
}

export default useAuthorisedApi;
