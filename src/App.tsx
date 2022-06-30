import { useEffect, useState } from 'react'
import './App.css'
import TagGroup from './components/TagGroup'
import supplierData from './data.json'
import { TagGroupProps } from './types'

function App() {
  const [tagGroups, setTagGroups] = useState<TagGroupProps[]>([])

  useEffect(() => {
    let tagGroups: TagGroupProps[] = []
    for (const [key, value] of Object.entries(supplierData)) {
      if (typeof value !== 'string') {
        tagGroups = [...tagGroups, {
          name: key.slice(5),
          tags: value.map(v => ({ text: v.name, id: `${v.name}-${v.id}` }))
        }]
      }
    }
    setTagGroups(tagGroups)
  }, [])

  function removeTag(tagId: string) {
    setTagGroups(tagGroups.map(tagGroup => {
      return {
        ...tagGroup,
        tags: tagGroup.tags.filter(tag => tag.id !== tagId)
      }
    }))
  }

  function addTag(text: string, category: string) {
    if (text.trim().length === 0) {
      return
    }
    setTagGroups(tagGroups.map(tagGroup => {
      if (tagGroup.name === category) {
        return {
          ...tagGroup,
          tags: [...tagGroup.tags, { text, id: `${text}-${tagGroup.tags.length}` }]
        }
      }
      return tagGroup
    }))
  }

  return (
    <div className="m-6 w-11/12 md:w-2/3">
      <div className="flex flex-wrap border-b-2 pb-2 max-w-fit">
        <span className="text-blue-700 text-xl mt-1.5 mr-1">★</span> 
        <h1 className="text-3xl">{supplierData.name}</h1>
      </div>
      {tagGroups.map(tagGroupProps => (
        <TagGroup {...tagGroupProps} key={tagGroupProps.name} removeTag={removeTag} addTag={addTag} />
      ))}
    </div>
  )
}

export default App
