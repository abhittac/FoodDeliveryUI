import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurants',
  type: 'document',
  fields: [
 {
  name: 'name',
  type:'string',
  title:'Name',
  validation:rule =>rule.required()
 },
 {
  name: 'description',
  type:'string',
  title:'Restaurant Description',
  validation:rule =>rule.required().max(200)
 },
 {
  name: 'image',
  type:'image',
  title:'image of the restaurant',

 },
 {
    name: 'lat',
    type:'number',
    title:'latitude of restaurant',
  
   },
   {
    name: 'lng',
    type:'number',
    title:'longitude of restaurant',
  
   },
   {
    name: 'address',
    type:'string',
    title:'Restaurant Address',
    validation:rule =>rule.required()
   },
   {
    name: 'rating',
    type:'number',
    title:'Enter a number between 1 to 5',
    validation:rule =>rule.required().min(1).max(5).error('Please enter a value between 1 to 5')
   },
   {
    name: 'reviews',
    type:'string',
    title:'Reviews',

   },
   {
    name: 'type',
    type:'reference',
    to:[{type:'category'}],
    title:'Category',
    validation:rule=>rule.required()

   },
   {
    name: 'dishes',
    type:'array',
   of:[{type:'reference',to:[{type:'dish'}]}],
    title:'Dishes',


   },
  ],
})
