import React from 'react';

export default {
  title: 'HTML',
  name: 'html',
  type: 'object',

  fields: [
    {
      title: 'HTML',
      name: 'text',
      type: 'string',
      rows: 15,
      validation: (Rule) => Rule.required(),
    },
  ],
};
