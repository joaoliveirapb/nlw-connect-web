import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'

export function Stats() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <MousePointerClick className="absolute top-3 left-3 size-5 text-purple" />

        <span className="font-heading text-2xl text-gray-200 font-semibold leading-none">
          1042
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Acessos ao link
        </span>
      </div>

      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <BadgeCheck className="absolute top-3 left-3 size-5 text-purple" />

        <span className="font-heading text-2xl text-gray-200 font-semibold leading-none">
          1042
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Inscrições feitas
        </span>
      </div>

      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <Medal className="absolute top-3 left-3 size-5 text-purple" />

        <span className="font-heading text-2xl text-gray-200 font-semibold leading-none">
          3º
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Posição no ranking
        </span>
      </div>
    </div>
  )
}
