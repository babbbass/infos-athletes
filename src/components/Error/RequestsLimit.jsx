import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { Wrapper } from 'utils/style/GlobalStyle'

export default function RequestsLimit() {
  return (
            <>
              <Header />
              <Wrapper>
                We have reached the request limit for this sport in the day Limit: 100
              </Wrapper>    
              <Footer />
            </>
  )
}
