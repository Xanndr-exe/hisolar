
const graphUrl = 'https://admin.tothebluemoon.com/graphql'; 

const getHomes = `query {
    properties(filters:{
      type: {eq: "home"}
    }pagination:{limit:300}){
      data {
        id
        attributes {
          uid
          name
        }
      }
    }
  }
` 
const getPhotoUrls = `query {
    property (id:  431)
  {
      data {
        id
        attributes {
          uid
          home{
            photoURLs
            address
            description
            location{
              latitude
              longitude
            }
            amenities{
              data{
                id
                attributes{
                  name
                }
              }
            }
            guests
            bedrooms
            bathrooms
            staffBedrooms
            serviceIncluded
            home_type{data{id}}
          }
        }
      }
      }
  }`


const uploadPhoto =  `
mutation {
    createUploadFile(
      data: {
        name: "villa-juliette-1"
        url: "https://tothebluemoon.fra1.digitaloceanspaces.com/rlr/Villa Juliette/AH6yw8kJBjIkOuq302nBPf1ZjxmRHGVh.webp"
        hash:"Bluemoon"
        mime:"image/webp"
        size:1
        provider:"local"
        folderPath:"/bluemoon"
      }
    ) {
      data {
        id
        attributes {
          url
        }
      }
    }
  }`

  const updateHomePhoto = `mutation {
    updateProperty( id: 431, data: { home : { photos: 506 } } ) {
      data {
        attributes {
          uid
          name
          home {
            photos {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }`