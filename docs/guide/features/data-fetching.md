---
sidebar_position: 81
id: Data Fetching
---

Shuvi provides a feature to fetch initial data when server-side rendering or route navigation for route component.

Each route module can export a component and a `loader`. And `useLoaderData` hook will provide the data that `loader` returns.

Take a look at the simple example as the following:

```tsx
import { useLoaderData, Loader } from '@shuvi/runtime';

const RouteComponent = () => {
  // highlight-next-line
  const data = useLoaderData<LoaderData>();
  return (
    <div>
      <p>{data?.hello}</p>
    </div>
  );
};

type LoaderData = {
  hello: string;
};

async function doSomethingAsync () {
  // do something async
}

// highlight-start
export const loader: Loader<LoaderData> = async ctx => {
  await doSomethingAsync()
  return {
    hello: 'world'
  };
};
// highlight-end


export default RouteComponent;
```

The `loader` is isomorphic and it will run before every server-side or client-side initial rendering and every route navigation.

Shuvi allows nested routes. All `loader`s of matched route modules will run one by one or parallelly according to the config.

By default, when using server-side rendering, all `loader`s will run at server-side and then render to string and send to browser.

During hydrating, if `loader` 




