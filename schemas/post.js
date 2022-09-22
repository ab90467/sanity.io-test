export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [

    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => [
        Rule.required(),
        Rule.max(50).warning('Shorter titles are usually better'),
      ],
    },
    {
      name: 'slug',
      title: 'Url to article',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'altTxtMainImage',
      title: 'Alternative text for image',
      type: 'string',
      maxLength: 96,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ingress',
      title: 'Frontpage ingress',
      description: 'short summary on blog-frontpage',
      type: 'ingress',
      maxLength: 250,
    },
    {
      name: 'post_ingress',
      title: 'Post ingress',
      description: 'short summary above main article',
      type: 'ingress',
      maxLength: 250,
    },
    {
      name: 'body',
      title: 'Body',
      description: 'Main article :-)',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'meta',
      description: 'Meta content for your blog post',
      title: 'Meta for page',
      type: 'meta',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
};
