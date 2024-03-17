import { SchemaTypeDefinition } from 'sanity'

import author from './author'
import blockContent from './blockContent'
import category from './category'
import post from './post'

export const schemaTypes = [post, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, author, category],
}
