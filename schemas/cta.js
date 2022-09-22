import React from 'react';
const Button = ({ value }) => {
  return (
    <div style={{display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
      <button style={{
        background: '#185dc1',
        color: 'white',
        borderRadius: '25px',
        borderWidth: '0',
        margin: '15px',
        minWidth: '150px',
        padding: '12px 25px' }}>
          {value.text}
      </button>
    </div>
  );
}

export default {
  title: 'CTA Button',
  name: 'cta',
  type: 'object',
  fields: [
    {
      title: 'Text on button',
      name: 'text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'a11y description',
      name: 'a11y',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'URL',
      description: 'Use complete url when using deep-links (example: "https://wwww.bulderbank.no/bla/bla")',
      type: 'string',
      name: 'link',
      validation: (Rule) => Rule.uri({
        validation: (Rule) => Rule.required(),
      }),
    },
    {
      title: 'GA action (common for both desktop & mobile)',
      type: 'string',
      name: 'ga',
    },
    {
      title: 'On mobile: text on button (leve blank to use value from "Text on button")',
      name: 'mobile_text',
      type: 'string',
    },
    {
      title: 'On mobile: url (leave blank to use value from "URL")',
      name: 'mobile_url',
      type: 'string',
    },
  ],
  preview: {
    select: {
      text: 'text'
    },
    component: Button
  }
};
