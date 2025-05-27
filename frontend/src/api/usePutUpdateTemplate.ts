import { useEffect } from 'react';

import {
  ICommunicationTemplate,
  IFetchState,
  IUpdateTemplateRequest,
} from 'types';

import { updateTemplateEndpoint } from './endpoints';
import useAuthorisedApi from './useAuthorisedApi';

export const usePutUpdateTemplate = (
  templateUpdate: IUpdateTemplateRequest,
): IFetchState<ICommunicationTemplate> => {
  const request = new Request(updateTemplateEndpoint(), {
    method: 'PUT',
    body: JSON.stringify(templateUpdate),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const { execute, ...state } = useAuthorisedApi<ICommunicationTemplate>(
    request,
    false,
  );

  useEffect(() => {
    if (templateUpdate) {
      execute();
    }
  }, [templateUpdate]);
  // console.log('state', JSON.stringify(templateUpdate));
  return state;
};
