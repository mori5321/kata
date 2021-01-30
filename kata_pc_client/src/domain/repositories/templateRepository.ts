import { Template, ID as TemplateID } from "@/domain/entities/Template";
import { Either } from "fp-ts/lib/Either";
import { Option } from "fp-ts/lib/Option";

interface ITemplateRepository {
  list: () => Promise<Template[]>
  findById: (id: TemplateID) => Promise<Option<Template>>
  add: (template: Template) => Promise<Either<string, void>> // Leftの値をErrorにしたいね。
  update: (newTemplate: Template) => Promise<Either<string, void>>
}

export { ITemplateRepository }
