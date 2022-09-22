export default {
  title: 'Meta for page',
  name: 'meta',
  type: 'object',
  initialValue: {
    newsletter_url: 'The initial title',
  },
  fields: [
    {
      title: 'Publish to bulderbank.no/blogg',
      name: 'published',
      type: 'boolean',
    },
    {
      title: 'Make available as newsletter',
      name: 'published_newsletter',
      type: 'boolean',
    },
    {
      name: 'newsletter_url',
      type: 'string',
      title: 'Newsletter URL',
      readOnly: true,
      hidden: ({ document }) => {
        document.meta.newsletter_url ="https://bulderbank.no/nyhetsbrev/" + document.slug.current;
        return !document.meta?.published_newsletter;
      }
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
