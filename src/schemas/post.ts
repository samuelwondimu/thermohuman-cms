import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
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
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
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
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'permaLink',
      type: 'string',
      title: 'Perma Link',
      readOnly: true,
    }),
    defineField({
      name: 'translationTitle',
      title: 'Translation Title',
      type: 'string',
    }),
    defineField({
      name: 'translationSlug',
      title: 'Translation Title',
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'user' }], // assuming 'author' is the document type for authors
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
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
      author: 'author.name',
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
