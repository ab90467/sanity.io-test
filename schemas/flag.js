import {TagIcon as icon} from '@sanity/icons'


export default {
  name: 'flag',
  title: 'Flag',
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
      name: 'desc',
      title: 'Short description',
      type: 'string',
    },
    {
      name: 'typeFlag',
      title: 'Typeof flag',
      type: 'string',
      options: {
        list: ['boolean','string'],
        layout: 'radio'
      },
      initialValue: 'boolean',
      validation: Rule => Rule.required()
    },
    {
      name: 'stringFlag',
      title: 'String flag',
      type: 'string',
      validation: Rule => Rule.required(),
      hidden: ({parent, document}) => parent?.typeFlag !== 'string',
    },
    {
      name: 'booleanflag',
      title: 'Boolean Flag',
      type: 'string',
      options: {
        list: ['true', 'false'],
        layout: 'radio'
      },
      hidden: ({parent, document}) => parent?.typeFlag !== 'boolean',
    }
  ],
  preview: {
    select: {title: 'key', subtitle: 'value', media: 'image'},
  },
}
