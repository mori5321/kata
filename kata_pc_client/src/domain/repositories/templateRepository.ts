import { Template, ID as TemplateID } from "@/domain/entities/Template";
import { Either } from "fp-ts/lib/Either";
import { Option } from "fp-ts/lib/Option";

interface ITemplateRepository {
  list: () => Template[]
  findById: (id: TemplateID) => Option<Template>
  add: (template: Template) => Either<string, void>
}

export { ITemplateRepository }
