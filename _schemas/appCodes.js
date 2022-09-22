import { CodeBlockIcon as icon } from '@sanity/icons'

export default {
  name: 'appCodes',
  title: 'Avslagskoder',
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
      of: [{ type: 'rejectCode' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'page', media: 'image' },
  },
}
