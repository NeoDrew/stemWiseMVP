const COMM_HOST = window.ENV_CONFIG.hosts.api;
export const templatesGetEndpoint = () => `${COMM_HOST}/templateDTOs`;
export const templateGetEndpoint = () => `${COMM_HOST}/templateDTO/`;
export const deleteTemplateEndpoint = () => `${COMM_HOST}/DeleteTemplate`;
export const updateTemplateEndpoint = () => `${COMM_HOST}/UpdateTemplate`;
export const createTemplateEndpoint = () => `${COMM_HOST}/CreateTemplate`;
export const communicationEndpoint = () => `${COMM_HOST}/Communication`;
