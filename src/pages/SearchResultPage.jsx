import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NoData from '../components/NoData'

function SearchResultPage() {
  return (
    <>
        <Header/>

        {/* axios result */}
        <div className='h-screen flex justify-center items-center'>
            <NoData/>
        </div>

        <Footer/>
    </>
  )
}

export default SearchResultPage