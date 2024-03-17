import {PlayIcon} from '@sanity/icons'
import {defineField,defineType} from 'sanity'

import {VimeoPreview} from './ViemoPreview'

export const vimeoType = defineType({
  name: 'vimeo',
  type: 'object',
  title: 'Vimeo Embed',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'Viemo video URL',
    }),
  ],
  preview: {
    select: {title: 'url'},
  },
  components: {
    preview: VimeoPreview,
  },
})