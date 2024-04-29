import { client } from "./sanity"

let sanityquery=(query,params)=>client.fetch(query,params)

export const getFeaturedRestaurants=()=>{
    return sanityquery(`*[_type=='featured']{
        ...,
        restaurants[]->{
          ...,
          dishes[]->{
        ...,
          },
          type->{
          name
          }
        }
      }`)
}

export const getCategories=()=>{
    return sanityquery(`*[_type=='category']`)
}

export const getFeaturedRestaurantsById = id => {
  return sanityquery(`*[_type == 'featured' && _id == $id]{
    ...,
    restaurants[]->{
      ...,
      dishes[]{
        ...
      }
    }
  }`, { id: id }); // Pass id as a parameter
}