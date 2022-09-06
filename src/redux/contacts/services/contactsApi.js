import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import axios from 'axios';

// const axiosBaseQuery =
//   ({ baseUrl } = { baseUrl: '' }) =>
//   async ({ url, method, data, params }) => {
//     try {
//       const result = await axios({ url: baseUrl + url, method, data, params })
//       return { data: result.data }
//     } catch (axiosError) {
//       let err = axiosError
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       }
//     }
//   }

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    // baseQuery: axiosBaseQuery({
    // baseUrl: 'https://connections-api.herokuapp.com',
    // }),
    baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
    tagTypes: ['Contact'],
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => `/contacts`,
            providesTags: ['Contact'],
        }),
        // getContactById: builder.query({
        //     query: (id) => `/contacts/${id}`,
        //     providesTags: ['Contact'],
        // }),
        addContact: builder.mutation({
            query: values => ({
                url: '/contacts',
                method: 'POST',
                body: values,
            }),
            invalidatesTags: ['Contact'],
        }),
        deleteContact: builder.mutation({
            query: id => ({
                url: `/contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact'],
        }),
        // updateContact: builder.mutation({
        //     query: fields => ({
        //         url: `/contacts/${fields.id}`,
        //         method: 'PATCH',
        //         body: fields,
        //     }),
        //     invalidatesTags: ['Contact'],
        // }),
        // toggleFavourite: builder.mutation({
        //     query: ({ id, favourite }) => ({
        //         url: `/contacts/${id}`,
        //         method: 'PUT',
        //         body: {favourite},
        //     }),
        //     invalidatesTags: ['Contact'],
        // }),
    }),
});

export const { useGetContactsQuery, useGetContactByIdQuery, useAddContactMutation, useDeleteContactMutation, useUpdateContactMutation } = contactsApi;