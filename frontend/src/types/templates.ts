export interface ICommunicationTemplate {
  id: string;
  communications: ICommunication[];
  muted: boolean;
  version: string;
}

export interface ICommunicationTemplateBase {
  id: string;
  communications: ICommunication[];
  muted: boolean;
}

export interface ICommunication {
  id: number;
  channel: number;
  subject: string;
  content: IContent;
  from: string;
  to: string[];
}

export interface IContent {
  format: number;
  body: string;
  designLayoutSchema?: IDesignLayoutSchema;
}

export interface IDesignLayoutSchema {
  fields: IDesignLayoutField[];
}

export interface IDesignLayoutField {
  name: string;
  value: string;
  type: number;
}

export interface IUpdateTemplateRequest {
  OldTemplate: ICommunicationTemplate;
  NewTemplate: ICommunicationTemplateBase;
}

export const Enums = {
  Channel: {
    1: {
      Name: 'Email',
      ParticipantA: 'Sender Email',
      ParticipantB: 'Recipient Email',
      Formats: {
        1: 'Text',
        2: 'HTML',
      },
    },
    2: {
      Name: 'SMS',
      ParticipantA: 'Sender Phone Number',
      ParticipantB: 'Recipient Phone Number',
      Formats: { 1: 'Text' },
    },
    3: {
      Name: 'Teams',
      ParticipantA: 'Workflow Post URL',
      ParticipantB: 'Group Chat URL',
      Formats: { 1: 'Text' },
    },
  } as const,

  LayoutField: {
    1: { TypeName: 'Text', DisplayText: true, DisplayValue: true },
    2: { TypeName: 'Header', DisplayText: true, DisplayValue: false },
    3: { TypeName: 'Table', DisplayText: false, DisplayValue: false },
    4: { TypeName: 'Button', DisplayText: true, DisplayValue: true },
    5: { TypeName: 'Link', DisplayText: true, DisplayValue: true },
  } as const,
} as const;
