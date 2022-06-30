export type TagType = {
  id: string
  text: string
}

export type TagGroupProps = {
  name: string
  tags: TagType[]
}