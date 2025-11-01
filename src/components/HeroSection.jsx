import React from 'react'
import { ArrowDown } from 'lucide-react'

const HeroSection = () => {
  return (
    <section id='hero' className='relative min-h-screen flex flex-col items-center justify-center px-4'>
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                    <span className='opacity-0 animate-fade-in'>Hallo! Ich bin</span>
                    <span className='text-primary opacity-0 animate-fade-in-delay-1'>{" "}Victor</span>
                    <span className='text-gradient ml-2 opacity-0 animate-fade-in'>{" "}Cruz</span>
                </h1>

                <p className='text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-1'>
                  Ich bin ein leidenschaftlicher Full-Stack-Entwickler mit Fokus auf moderne Webtechnologien.
                  Meine Mission ist es, innovative und benutzerfreundliche digitale Erlebnisse zu schaffen, 
                  die sowohl ästhetisch ansprechend als auch funktional sind.
                </p>

                <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
                  <a href="#projects" className='cosmic-button'>
                    Meine Projekte ansehen
                  </a>
                </div>
            </div>

        </div>

        <div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className='text-sm text-muted-foreground mb-2'>Scroll</span>
          <ArrowDown className="w-6 h-6 text-primary"/>

          </div>
        </div>

    </section>
  )
}

export default HeroSection