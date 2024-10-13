import React from 'react'
import { AUDIBLE_DATA } from '@/constants';
import { Podcast } from 'lucide-react';
import AudibleCard from '@/components/AudibleCard';
const NovaHome = () => {
  return (
    <div className="flex flex-col gap-9 my-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold default-text">
          New on Nova
        </h1>
        <div className="grid-layout">
          {AUDIBLE_DATA.map(({ id, title, description, imgURL }) => (
            <AudibleCard
              key={id}
              audibleId={id}
              title={title}
              description={description}
              imgURL={imgURL}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default NovaHome
