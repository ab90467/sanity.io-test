import {UserIcon, RocketIcon as icon} from '@sanity/icons'

export default {
  name: 'QM',
  title: 'QM',
  type: 'document',
  icon: icon,
  fields: [
    {
      name: 'Enviroment',
      title: 'enviroment',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'desc',
      title: 'Short description',
      type: 'string',
    },
    {
      name: 'keyvalue',
      title: 'List of strings',
      description: 'Strings for this page',
      type: 'array',
      of: [{type: 'flag'}],
    },
  ],
};
