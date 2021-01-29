import { Template, ID as TemplateID } from "@/domain/entities/template";
import { ITemplateRepository } from "@/domain/repositories/templateRepository";
import { Either, right } from "fp-ts/lib/Either";
import { none, some } from "fp-ts/lib/Option";

const templateRepositoryOnMemory: ITemplateRepository = {
  list: () => mockTemplateStore,
  findById: (id: TemplateID) => {
    const template = mockTemplateStore.find(template => template.id === id)
    if (!template)
      return none

    return some(template)
  },
  add: (template: Template): Either<string, void> => {
    mockTemplateStore = [...mockTemplateStore, template]

    return right(undefined)
  }
}

let mockTemplateStore: Template[] = [
  { id: "aaa", title: "ワインレッドの心", body: `
    今以上、これ以上、愛されるのに
    あなたはその、透き通った瞳のままで、
    あの消えそうに、燃えそうなワインレッドの
    心を持つあなたの願いが、叶うのに
  ` },
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
