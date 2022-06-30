import Select from 'react-select'

const suggestedTagsPortfolio = [
  { value: 'european', label: 'European' },
  { value: 'ecoFriendly', label: 'Eco-friendly' },
  { value: 'german', label: 'German' }
]

const suggestedTagsCertifications = [
  { value: 'iso9001', label: 'ISO 9001' },
  { value: 'egan', label: 'Vegan' },
  { value: 'organic', label: 'Organic' }
]

export default function TagInput({
  handleInput,
  handleSelect,
  category
}: {
  handleInput: (event: React.KeyboardEvent<HTMLInputElement>) => void,
  handleSelect: (value: string, category: string) => void,
  category: string
}) {
  const options = category === 'portfolio' ? suggestedTagsPortfolio : suggestedTagsCertifications

  return (
    <>
      {category === 'general' ?
        <input
          autoFocus
          onKeyDown={handleInput}
          className="shadow inline-flex appearance-none border rounded-full h-5 py-5 px-3 mt-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="New tag"
        /> :  
        <Select 
          onChange={e => handleSelect(e!.label, category)}
          className="inline-flex w-30 mt-2" 
          options={options} 
          styles={{
            control: (provided) => ({
              ...provided,
              borderRadius: '9999px',
              width: 200,
            }),
            
          }}
          components={{
            IndicatorSeparator: () => null
          }}
        />
      }

    </>
  )
}