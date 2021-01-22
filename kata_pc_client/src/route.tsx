import * as React from 'react';
import { Rocon, useRoutes } from 'rocon/react';
import { TopPage } from '@/components/pages';

const toplevelRoutes = Rocon.Path()
  .exact({ action: () => <TopPage /> })
  .route("top", (route) => route.action(() => <p>TOP</p>))
  .route("templates");

const templatesRoutes =
  Rocon.Path()
    .any("id")
    .anyRoute
    .attach(Rocon.Path())
    .exact({ action: ({id}) => <p>{id}</p> })
    .route("detail", (route) => route.action(({id}) => 
      <p>Hello {id}</p>
    ));

toplevelRoutes._.templates.attach(templatesRoutes)

const Routes: React.FC = () => {
  return useRoutes(toplevelRoutes)
}

export { toplevelRoutes, templatesRoutes, Routes }
