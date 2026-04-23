import { useParams } from 'react-router-dom'

export default function PracticePage() {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <h1 className="text-2xl font-semibold text-gray-900">Practice — {id}</h1>
    </div>
  )
}
