import { Template } from "@/domain/entities/Template";

interface ITemplateRepository {
  list: () => Template[]
}

export { ITemplateRepository }
