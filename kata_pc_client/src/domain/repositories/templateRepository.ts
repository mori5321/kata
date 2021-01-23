import { Template, ID as TemplateID } from "@/domain/entities/Template";
import { Option } from "fp-ts/lib/Option";

interface ITemplateRepository {
  list: () => Template[]
  findById: (id: TemplateID) => Option<Template>
}

export { ITemplateRepository }
