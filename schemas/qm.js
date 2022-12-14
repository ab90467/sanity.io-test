import {UserIcon, RocketIcon as icon} from '@sanity/icons'

export default {
  name: 'QM',
  title: 'QM',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
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
      title: 'List of keys',
      description: 'a list of key -> value for thhis enviroment',
      type: 'array',
      of: [{type: 'flag'}],
    },
  ],
  preview: {
    select: {title: 'Enviroment', subtitle: 'desc',},
  },
};
