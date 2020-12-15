import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { Spinner } from '../../styles/animations'
import { useCategoriesData } from '../../hooks/useCategoriesData'

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Spinner />
          : categories.map(category =>
            <Item key={category.id}>
              <Category {...category} path={`/pet/${category.id}`} />
            </Item>
          )
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList('fixed')}
    </>
  )
}
export const ListOfCategories = React.memo(ListOfCategoriesComponent)
