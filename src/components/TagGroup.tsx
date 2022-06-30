import { useState } from "react"
import Tag from "./Tag"
import { TagGroupProps } from "../types"
import TagInput from "./TagInput"

export default function TagGroup({
  removeTag,
  addTag,
  name,
  tags,
}: {
  removeTag: (tagId: string) => void,
  addTag: (text: string, category: string) => void,
} & TagGroupProps) {
  const [showInput, setShowInput] = useState(false)

  function handleInput(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' || event.key === 'Tab') {
      event.preventDefault()
      addTag(event.currentTarget.value, name)
      event.currentTarget.value = ''
    }
    if (event.key === 'Enter') {
      setShowInput(false)
    }
  }

  function handleSelect(value: string, category: string) {
    addTag(value, category)
    setShowInput(false)
  }

  return (
    <>
      <h2 className="text-gray-400 ml-2 mt-5 text-lg">{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
      {tags.length ? (
        <>
          <Tag {...tags[0]} />
          {tags.slice(1).map(tagProps => (
            <Tag {...tagProps} key={tagProps.id} removeTag={removeTag} />
          ))}
        </>
      ) : null}
      {showInput ?
        <TagInput handleInput={handleInput} handleSelect={handleSelect} category={name} />
        : (
          <button onClick={() => setShowInput(true)}>
            <span className="inline-flex font-bold mx-3 my-3">
              + New Tag
            </span>
          </button>
        )}
    </>
  )
}