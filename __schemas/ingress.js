export default {
  title: 'Ingress',
  name: 'ingress',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {
          title: 'Normal',
          value: 'normal',
        },
      ],
      lists: [{
        title: 'Bullet',
        value: 'bullet',
      }],
      marks: {
        decorators: [
          {
            title: 'Strong',
            value: 'strong',
          },
          {
            title: 'Emphasis',
            value: 'em',
          },
        ],
      },
    },
  ],
};
