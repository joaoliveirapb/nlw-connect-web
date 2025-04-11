import Image from 'next/image'

import cooperMedal from '@/assets/cooper-medal.svg'
import goldMedal from '@/assets/gold-medal.svg'
import silverMedal from '@/assets/silver-medal.svg'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className="relative flex flex-col justify-center gap-3 rounded-xl bg-gray-700 border border-gray-600 p-6">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | João Oliveira
          </span>
          <span className="font-heading text-2xl text-gray-200 font-semibold leading-none">
            1030
          </span>

          <Image
            src={goldMedal}
            alt="Gold medal"
            className="absolute top-0 right-8"
          />
        </div>

        <div className="relative flex flex-col justify-center gap-3 rounded-xl bg-gray-700 border border-gray-600 p-6">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2º</span> | Rebeca Oliveira
          </span>
          <span className="font-heading text-2xl text-gray-200 font-semibold leading-none">
            1030
          </span>

          <Image
            src={silverMedal}
            alt="Gold medal"
            className="absolute top-0 right-8"
          />
        </div>

        <div className="relative flex flex-col justify-center gap-3 rounded-xl bg-gray-700 border border-gray-600 p-6">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3º</span> | Fabiana Preto
          </span>
          <span className="font-heading text-2xl text-gray-200 font-semibold leading-none">
            1030
          </span>

          <Image
            src={cooperMedal}
            alt="Gold medal"
            className="absolute top-0 right-8"
          />
        </div>
      </div>
    </div>
  )
}
