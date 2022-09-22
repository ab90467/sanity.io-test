import {TagIcon as icon} from '@sanity/icons'

export default {
  name: 'pageTexts',
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
      name: 'value',
      title: 'Value',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'desc',
      title: 'Short description',
      type: 'string',
    },
    {
      name: 'extValue',
      title: 'Rich text (not enabled yet)',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {title: 'key', subtitle: 'value', media: 'image'},
  },
}
