import React from 'react'
import Slider from '../../components/Slider/Slider'
import TimeTable from '../../components/Timetable'
import CopyCodePageContent from './styled-components/CopyCodePageContent'

const CopyCodePage = () => {
  return (
    <CopyCodePageContent>
      <TimeTable/>
    </CopyCodePageContent>
  )
}

export default CopyCodePage;