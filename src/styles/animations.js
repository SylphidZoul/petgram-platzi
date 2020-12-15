import styled, { css, keyframes } from 'styled-components'

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`
export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeInKeyframes} ${type};`

const spin = keyframes`
  from { 
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
export const Spinner = styled.div`
  margin: 0 auto;
  border: 5px solid #df0a6d;
  border-top: 5px solid #4a9576;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  animation: ${spin} 1s ease-out infinite;
`
