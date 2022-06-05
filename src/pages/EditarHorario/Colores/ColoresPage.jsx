import React from 'react'
import TimeTable from '../../../components/Timetable'
import Header from '../Header'
import SettingsColores from './components/SettingsColores'

const ColoresPage = () => {
  return (
    <main>
        <Header/>
        <SettingsColores/>
        <TimeTable/>
    </main>
  )
}

export default ColoresPage