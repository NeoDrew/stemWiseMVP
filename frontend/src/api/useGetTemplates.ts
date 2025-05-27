import { useEffect } from 'react';

import { ICommunicationTemplate, IFetchState } from 'types';

import { templatesGetEndpoint } from './endpoints';
import useAuthorisedApi from './useAuthorisedApi';

export const useGetTemplates = (
  shouldGetTemplates: boolean,
): IFetchState<ICommunicationTemplate[]> => {
  const request = new Request(templatesGetEndpoint());
  const { execute, ...state } = useAuthorisedApi<ICommunicationTemplate[]>(
    request,
    false,
  );

  useEffect(() => {
    if (shouldGetTemplates) {
      execute();
    }
  }, [shouldGetTemplates]);
  return state;
};
