export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 50,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      title: 'Meta title',
      name: 'meta_title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Meta description',
      type: 'string',
      name: 'meta_desc',
      validation: (Rule) => Rule.required(),
    },
  ],
};
