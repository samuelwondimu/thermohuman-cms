import {PlayIcon} from '@sanity/icons'
import {defineField,defineType} from 'sanity'

import { SpotifyPreview } from './SpotifyPreview'

export const spotifyType = defineType({
  name: 'spotify',
  type: 'object',
  title: 'Spotify Embed',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'Spotify video URL',
    }),
  ],
  preview: {
    select: {title: 'url'},
  },
  components: {
    preview: SpotifyPreview,
  },
})