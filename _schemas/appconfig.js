import { CodeBlockIcon as icon } from '@sanity/icons'

export default {
  name: 'appconfig',
  title: 'App-config',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  icon: icon,
  fields: [
    {
      name: 'title',
      title: 'Description',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'page',
      title: 'page-like ID in creditapplication',
      type: 'string',
      hidden: true,
    },
    {
      name: 'keyvalue',
      title: 'List of strings',
      type: 'array',
      of: [{ type: 'pageTexts' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'page', media: 'image' },
  },
}
