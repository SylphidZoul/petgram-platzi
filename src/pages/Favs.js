import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

export default () => {
  return (
    <Layout title='Tus Favoritos' subtitle='Aqui puedes encontrar tus favoritos'>
      <FavsWithQuery />
    </Layout>
  )
}
