import { Template } from "@/domain/entities/template";
import { ITemplateRepository } from "@/domain/repositories/templateRepository";

const templateRepositoryOnMemory: ITemplateRepository = {
  list: () => mockTemplateStore,
}

let mockTemplateStore: Template[] = [
  { id: "aaa", title: "Hello", body: "World" },
  { id: "bbb", title: "Hello", body: "WorldA" },
  { id: "ccc", title: "Hello", body: "WorldB" },
  { id: "ddd", title: "Hello", body: "WorldC" },
  { id: "eee", title: "Hello", body: "WorldD" },
  { id: "fff", title: "Hello", body: "WorldE" },
  { id: "ggg", title: "Hello", body: "WorldF" },
  { id: "hhh", title: "Hello", body: "WorldG" },
  { id: "iii", title: "Hello", body: "WorldH" },
]

export { templateRepositoryOnMemory }
