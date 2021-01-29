import { Template } from "@/domain/entities/template";
import { ITemplateFactory } from "@/domain/factories/templateFactory";
import { v4 as uuidv4 } from 'uuid';

const TemplateFactory: ITemplateFactory = {
  newTemplate: (title: string,  body: string): Template => {
    const id = uuidv4() 

    const template = {
      id: id,
      title: title,
      body: body,
    }

    return template
  }
}

export { TemplateFactory }
