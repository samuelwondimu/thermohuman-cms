import { documentInternationalization } from '@sanity/document-internationalization'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import {
  defineUrlResolver,
  Iframe,
  IframeOptions,
} from 'sanity-plugin-iframe-pane'
import { previewUrl } from 'sanity-plugin-iframe-pane/preview-url'

import {
  apiVersion,
  dataset,
  previewSecretId,
  projectId,
} from '~/lib/sanity.api'
import { schema } from '~/schemas'

const iframeOptions = {
  url: defineUrlResolver({
    base: '/api/draft',
    requiresSlug: ['post'],
  }),
  urlSecretId: previewSecretId,
  reload: { button: true },
} satisfies IframeOptions

export default defineConfig({
  basePath: '/studio',
  name: 'project-name',
  title: 'Project Name',
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool({
       defaultDocumentNode: (S, { schemaType }) => {
        return S.document().views([
          S.view.form(),
          S.view.component(Iframe).options(iframeOptions).title('Preview'),
        ])
      },
    }),
    previewUrl({
      base: '/api/draft',
      requiresSlug: ['post'],
      urlSecretId: previewSecretId,
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    documentInternationalization({
      supportedLanguages: [
        { id: 'es', title: 'Spanish' },
        { id: 'en', title: 'English' },
      ],
      schemaTypes: ["category", "post"],
      languageField: `language`
    }),
  ],
})
