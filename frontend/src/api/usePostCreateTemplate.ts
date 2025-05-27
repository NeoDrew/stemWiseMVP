import { useEffect } from 'react';

import {
  ICommunicationTemplate,
  ICommunicationTemplateBase,
  IFetchState,
} from 'types';

import { createTemplateEndpoint } from './endpoints';
import useAuthorisedApi from './useAuthorisedApi';

export const usePostCreateTemplate = (
  templateCreation: ICommunicationTemplateBase,
): IFetchState<ICommunicationTemplate> => {
  const request = new Request(createTemplateEndpoint(), {
    method: 'POST',
    body: JSON.stringify(templateCreation),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const { execute, ...state } = useAuthorisedApi<ICommunicationTemplate>(
    request,
    false,
  );

  useEffect(() => {
    if (templateCreation) {
      execute();
    }
  }, [templateCreation]);
  // console.log('state', JSON.stringify(templateCreation));
  return state;
};
