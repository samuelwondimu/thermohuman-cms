import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'user',
  title: 'Users',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
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
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'user_nicename',
      title: 'User NiceName',
      type: 'string',
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'user_email',
      title: 'User Email',
      type: 'string',
    }),
    defineField({
      name: 'nickname',
      title: 'Nick Name',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    //   language: 'language',
    },
    prepare(select) {
      const { title } = select

      return {
        title,
        // subtitle: language.toUpperCase(),
      }
    },
  },
})
