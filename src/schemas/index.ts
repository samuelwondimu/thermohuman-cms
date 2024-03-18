import { SchemaTypeDefinition } from 'sanity'

import author from './author'
import blockContent from './blockContent'
import category from './category'
import { spotifyType } from './embed/spotify'
import { vimeoType } from './embed/viemo'
import { youTubeType } from './embed/youtube'
import post from './post'
import publication from './publication'

export const schemaTypes = [post, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, author, category, youTubeType, spotifyType, vimeoType, publication],
}
