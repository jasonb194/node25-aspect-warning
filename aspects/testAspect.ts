import {defineAssetAspect, defineField} from 'sanity'

export default defineAssetAspect({
  name: 'testAspect',
  title: 'testAspect',
  type: 'object',
  fields: [
    defineField({
      name: 'string',
      title: 'Plain String',
      type: 'string',
    }),
  ],
})
