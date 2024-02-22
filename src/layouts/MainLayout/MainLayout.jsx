import React from 'react'
import '../MainLayout/MainLayout.scss'
import ContentLayout from '../ContentLayout/ContentLayout'
import Header from '../Header/Header'



const MainLayout = () => {
  return (
    <div className="main-container">
    <Header/>
    <ContentLayout/>
  

</div>
  )
}

export default MainLayout