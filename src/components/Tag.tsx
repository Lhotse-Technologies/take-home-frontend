import { TagType } from "../types";

export default function Tag({
  removeTag,
  id,
  text,
}: { removeTag?: (tagId: string) => void } & TagType) {
  return (
    <div
      className="tag inline-flex items-center text-sm leading-sm bg-neutral-200 px-2 py-6 mr-3 mt-2 rounded-full max-h-5"
    >
      <span className={`${removeTag ? 'ml-2' : 'mx-2'} font-bold mb-0.5 truncate max-w-xs`}>{text}</span>
      {removeTag && (
        <button
          className="w-6 h-8 sm:opacity-0 hover:opacity-100 text-gray-400 focus:outline-none"
          onClick={() => removeTag(id)}
        >
          <svg className="w-6 h-6 fill-current mx-auto" viewBox="0 0 24 24"><path fillRule="evenodd" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z" /></svg>
        </button>
      )}
    </div>
  )
}