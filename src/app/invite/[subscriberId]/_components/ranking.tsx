import Image from 'next/image'

import cooperMedal from '@/assets/cooper-medal.svg'
import goldMedal from '@/assets/gold-medal.svg'
import silverMedal from '@/assets/silver-medal.svg'
import { getRanking } from '@/http/api'

export async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((rankingItem, index) => {
          const rankingPosition = index + 1

          return (
            <div
              key={rankingItem.id}
              className="relative flex flex-col justify-center gap-3 rounded-xl bg-gray-700 border border-gray-600 p-6"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{rankingPosition}º</span> |{' '}
                {rankingItem.name}
              </span>
              <span className="font-heading text-2xl text-gray-200 font-semibold leading-none">
                {rankingItem.score}
              </span>

              {rankingPosition === 1 && (
                <Image
                  src={goldMedal}
                  alt="Gold medal"
                  className="absolute top-0 right-8"
                />
              )}
              {rankingPosition === 2 && (
                <Image
                  src={silverMedal}
                  alt="Silver medal"
                  className="absolute top-0 right-8"
                />
              )}
              {rankingPosition === 3 && (
                <Image
                  src={cooperMedal}
                  alt="Cooper medal"
                  className="absolute top-0 right-8"
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
