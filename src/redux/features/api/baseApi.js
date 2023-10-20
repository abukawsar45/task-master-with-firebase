import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://taskmaster-server-roan.vercel.app',
  }),
  tagTypes: ['Tasks'],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => '/tasks',
      providesTags: ['Tasks'],
    }),
    updateTasks: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Tasks'],
    }),
    addTask: builder.mutation({
      query: (task) => ({
        url: '/tasks',
        method: 'POST',
        body: task,
      }),
      invalidatesTags: ['Tasks'],
    }),
  }),
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

export const {useGetTasksQuery, useUpdateTasksMutation, useAddTaskMutation } = baseApi;

export default baseApi;