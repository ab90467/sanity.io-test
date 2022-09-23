import {UserIcon, RocketIcon, StarIcon, EarthGlobeIcon as Icon} from '@sanity/icons'

export default {
  name: 'AM',
  title: 'AM',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  icon: Icon,
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
