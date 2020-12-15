import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'

// Ponemos una altura minima para que no interseccione en el viewport si no tiene contenido
export const Article = styled.article`
  min-height: 200px;  
`

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  /* Misma Relacion de aspecto 16:9 */
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`

export const Img = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`
