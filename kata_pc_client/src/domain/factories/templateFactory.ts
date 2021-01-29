import { Template } from "../entities/template";

interface ITemplateFactory {
  newTemplate: (title: string, body: string) => Template
}

export { ITemplateFactory }
