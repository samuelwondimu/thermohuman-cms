import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'publication',
  title: 'Publication',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      description: 'Select the most relevant category for this post.',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
      validation: (Rule) =>
        Rule.required().error('Please select a category/topic for the post.?'),
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'permaLink',
      type: 'string',
      title: 'Perma Link',
      readOnly: true,
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
    defineField({
      name: 'writer',
      title: 'Writer',
      type: 'string',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'user' }], // assuming 'author' is the document type for authors
    }),
    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'writer',
      media: 'mainImage',
      language: 'language',
    },
    prepare(selection) {
      const { title, author, language, media } = selection
      const subtitle = author ? `(${language}) by ${author}` : 'Author unknown'
      return { title, subtitle,  media }
    },
  },
})
