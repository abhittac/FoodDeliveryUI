import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Restaurants',
  type: 'document',
  fields: [
 {
  name: 'name',
  type:'string',
  title:'Restaurant Name',
  validation:rule =>rule.required()
 },
 {
  name: 'description',
  type:'string',
  title:'Description',
  validation:rule =>rule.required().max(200)
 },
 {
    name: 'restaurants',
    type:'array',
   of:[{type:'reference',to:[{type:'restaurant'}]}],
    title:'Restaurants',


   },
 
  ],
})
