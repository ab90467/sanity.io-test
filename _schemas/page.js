import {UserIcon, RocketIcon as icon} from '@sanity/icons'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: icon,
  fields: [
    {
      name: 'title',
      title: 'Description',
      type: 'string',
      description: 'Describe page',
    },
    {
      name: 'page',
      title: 'Page-url',
      type: 'string',
      description: 'Please use complete Route-url',
    },
    {
      name: 'gaId',
      title: 'Google Analytics ID',
      type: 'string',
      description: 'Log a special ID when user enter page?',
    },
    {
      name: 'keyvalue',
      title: 'List of strings',
      description: 'Strings for this page',
      type: 'array',
      of: [{type: 'pageTexts'}],
    },
  ],
  preview: {
    select: {title: 'title', subtitle: 'page', media: 'image'},
  },
}
