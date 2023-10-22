import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://taskmaster-server-roan.vercel.app',
    baseUrl: 'https://task-master-server.up.railway.app/',
  }),
  tagTypes: ['Tasks'],
  endpoints: () => ({}),
});

// addTask: builder.mutation({
//       query: (task) => ({
//         url: '/tasks',
//         method: 'POST',
//         body: task,
//       })
//     })
//   })
// });


export default baseApi;