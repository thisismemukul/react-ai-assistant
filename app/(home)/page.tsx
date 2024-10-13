import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/ModeToggle'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      <p className="text-neutral-600 text-center text-6xl">Say hello to AI World</p>
      <Button className="text-center" variant="default" size="lg">
        Click me
      </Button>
      <ModeToggle />
    </div>
    </div>
  )
}

export default HomePage
