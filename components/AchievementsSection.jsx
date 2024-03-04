'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers")
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "25",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "10",
  },
  // {
  //   metric: "Award",
  //   value: "10",
  // },
  {
    metric: "Years",
    value: "3",
  },
]

const AchievementsSection = () => {
  return (
    <div className='py-8 px-4 md:px-4 xl:gap-16 sm:py-16 xl:px-16'>
      <div className="border border-[#33353F] rounded-md py-8 px-2 lg:px-16 flex flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div key={index} className='flex flex-col items-center w-full justify-center mx-px md:mx-4'>
              <h2 className="text-white text-lg lg:text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-lg lg:text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tension: 140 * (index + 1)
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-grey text-base">
                {achievement.metric}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AchievementsSection