import { useEffect } from 'react';

import { ICommunicationTemplate, IFetchState } from 'types';

import { deleteTemplateEndpoint } from './endpoints';
import useAuthorisedApi from './useAuthorisedApi';

export const useDeleteTemplate = (
  deleteRequest: ICommunicationTemplate,
): IFetchState<ICommunicationTemplate> => {
  const request = new Request(deleteTemplateEndpoint(), {
    method: 'DELETE',
    body: JSON.stringify(deleteRequest),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const { execute, ...state } = useAuthorisedApi<ICommunicationTemplate>(
    request,
    false,
  );

  useEffect(() => {
    if (deleteRequest) {
      execute();
    }
  }, [deleteRequest]);
  return state;
};
