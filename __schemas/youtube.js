import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
// https://www.sanity.io/guides/portable-text-how-to-add-a-custom-youtube-embed-block

// Til neste prosjekt
// https://www.sanity.io/schemas/vimeo-youtube-video-id-and-thumbnail-custom-component-4a86c2f5

const Preview = ({ value }) => {
  const { url } = value
  const id = getYouTubeId(url)
  return (<YouTube videoId={id}/>)
}

export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
      validation: (Rule) => Rule.required()
        .error('You have forgotten to select youtube URL'),
    }
  ],
  preview: {
    select: {
      url: 'url'
    },
    component: Preview
  }
}
