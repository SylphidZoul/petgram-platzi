import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'

const HomePage = ({ categoryId }) => {
  return (
    <Layout
      title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos
      de animales muy bonitos'
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  )
}
const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
export default Home
