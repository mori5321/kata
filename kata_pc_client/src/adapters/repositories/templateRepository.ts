import { Template, ID as TemplateID } from "@/domain/entities/template";
import { ITemplateRepository } from "@/domain/repositories/templateRepository";
import { Either, left, right } from "fp-ts/lib/Either";
import { none, some } from "fp-ts/lib/Option";
import PouchDB from 'pouchdb';

const templateRepositoryOnMemory: ITemplateRepository = {
  list: async () => mockTemplateStore,
  findById: async (id: TemplateID) => {
    const template = mockTemplateStore.find(template => template.id === id)
    if (!template)
      return none

    return some(template)
  },
  add: async (template) => {
    mockTemplateStore.push(template)
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

const templatesDB = new PouchDB("templates"); 
type TemplateDoc = {
  _id: string,
  title: string,
  body: string,
}


const templateRepositoryOnPouchDB: ITemplateRepository = {
  list: async () => {
    const templatesDocs = await templatesDB.allDocs<TemplateDoc>({include_docs: true})    
    console.log(templatesDocs)
  
    const templates: Template[] = templatesDocs.rows.map(template => {
      return {
        id: template.doc?._id ?? "",
        title: template.doc?.title ?? "",
        body: template.doc?.body ?? "",  
      }
    })

    return templates;
  },
  findById: async(id: TemplateID) => {
    // TODO:ここの右の型、汎用化した方が良さそう。
    let templateDoc: TemplateDoc & PouchDB.Core.IdMeta & PouchDB.Core.GetMeta;
    try {
      templateDoc = await templatesDB.get<TemplateDoc>(id);
    } catch (e) {
      console.log(e);
      return none
    }

    console.log(templateDoc);

    const template: Template = {
      id: templateDoc._id,
      title: templateDoc.title,
      body: templateDoc.body
    }
    return some(template);
  },
  add: async(template: Template) => {
    const templateDoc: TemplateDoc = {
      _id: template.id,
      title: template.title,
      body: template.body,
    }

    const result = await templatesDB.put<TemplateDoc>(templateDoc)
    
    if (!result.ok) {
      return left("Failed...") // TODO: More detailed error message with Error Object.
    }

    return right(undefined)    
  }
}


// // Insert seed value.
// mockTemplateStore.forEach(temp => {
//   templateRepositoryOnPouchDB.add(temp);
// })

export {
  templateRepositoryOnMemory,
  templateRepositoryOnPouchDB
}
