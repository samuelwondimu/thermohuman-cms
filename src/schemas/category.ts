import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'translationSlug',
      title: 'Translation Slug',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      language: 'language',
    },
    prepare(select) {
      const { title, language } = select

      return {
        title,
        subtitle: language.toUpperCase(),
      }
    },
  },
})
