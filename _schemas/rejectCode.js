import { TagIcon as icon } from '@sanity/icons'

export default {
  name: 'rejectCode',
  title: 'Texts',
  type: 'object',
  icon,
  fields: [

    {
      name: 'key',
      title: 'Key',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      title: 'Body',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'desc',
      title: 'Short description',
      type: 'string',
    },
  ],
  preview: {
    select: { title: 'key', subtitle: 'value', media: 'image' },
  },
}
