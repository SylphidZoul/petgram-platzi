/* import { withPhotos } from '../hoc/withPhotos' */
import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'
import { Spinner } from '../styles/animations'

const GET_PHOTOS = gql`
query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
const renderProp = ({ loading, error, data }) => {
  if (loading) return <Spinner />
  if (error) return <h1>Lo siento, ha habido un error!</h1>
  return <ListOfPhotoCardsComponent data={data} />
}

export const ListOfPhotoCards = (categoryId) => {
  return (
    <Query query={GET_PHOTOS} variables={categoryId}>
      {renderProp}
    </Query>
  )
}

/* export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent) */
