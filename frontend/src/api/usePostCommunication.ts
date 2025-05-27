import { useEffect } from 'react';

import {
  ICommunicationTemplate,
  ICommunicationTemplateBase,
  IFetchState,
} from 'types';

import { communicationEndpoint } from './endpoints';
import useAuthorisedApi from './useAuthorisedApi';

export const usePostCommunication = (
  communicationRequest: ICommunicationTemplateBase,
): IFetchState<ICommunicationTemplate> => {
  const request = new Request(communicationEndpoint(), {
    method: 'POST',
    body: JSON.stringify(communicationRequest),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const { execute, ...state } = useAuthorisedApi<ICommunicationTemplate>(
    request,
    false,
  );

  useEffect(() => {
    if (communicationRequest) {
      execute();
    }
  }, [communicationRequest]);
  // console.log('state', JSON.stringify(templateUpdate));
  return state;
};
