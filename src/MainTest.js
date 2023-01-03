
import React from 'react'
import CalendarDemo from './CalendarDemo'
import ButtonGroub from './Components/ButtonGroub'
import Header from './Components/Header'
import Tooltips from './Components/Tooltips'
import Images from './Images'
import Slider from './Slider'
import FromSections from './Components/FromSections';
import TableItem from './Components/TableItems/TableItem'

const MainTest = () => {
  return (
    <div>
        <Header></Header>
        <TableItem></TableItem>
        <FromSections></FromSections>
        <Tooltips></Tooltips>
        <ButtonGroub></ButtonGroub>
       
        <Images></Images>
        <CalendarDemo></CalendarDemo>
        <Slider></Slider>
    
      
    </div>
  )
}

export default MainTest
