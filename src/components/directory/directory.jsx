import React from 'react'
import { MenuItem } from '../menu-item/menu-item'
import "../directory/directory.scss"
import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import { useSelector } from 'react-redux'

export const Directory = (props) => {
  const state = useSelector(state => state)
  const sections = selectDirectorySections(state)
    
  return (
        <div className="directory-menu">
            {sections.map(section => {
                return <MenuItem key={section.id} title={section.title.toUpperCase()} imageUrl={section.imageUrl} size={section.size}/> 
            })}            
        </div>
    )
}
