import React from 'react';
import Quote from '../custom/Quote';

const QuotePreview = ({value}) => (<div style={{padding: '10px'}}><Quote quote={value.text} quotedBy={value.origin} color={value.color}/></div>);


export default {
  title: 'Quote',
  name: 'quote',
  type: 'object',
  initialValue: {
    color: 'black'
  },
  fields: [
    {
      title: 'Text',
      name: 'text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'Quote Origin',
      name: 'origin',
      type: 'string',
    },{
      name: 'color',
      type: 'string',
      options: {
        list: [
          {
            title: 'Black',
            value: 'black'
          },
          {
            title: 'Dongeri',
            value: '#185dc1'
          },
          {
            title: 'Punch',
            value: '#ff4d5b'
          },
          {
            title: 'Kermit',
            value: '#12D499'
          },
          {
            title: 'Prince',
            value: '#64006B'
          }
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      }
    }
  ],
  preview: {
    select: {
      text: 'text',
      origin: 'origin',
      color: 'color',
    },
    component: QuotePreview
  }
};
