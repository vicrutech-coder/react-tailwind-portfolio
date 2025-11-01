import React from 'react'
import { Briefcase, Code, User } from 'lucide-react'


const AboutMe = () => {
  return (
    <section id="about" className='py-24 px-4 relative'>
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                About <span className='text-primary'> Me</span>

            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className='text-2xl font-semibold'>
                        Leidenschaft für Technik, Webentwicklung und kreative Innovation
                    </h3>
                    <p className='text-muted-foreground'>
                        Mit über 3 Jahren Erfahrung in der Webentwicklung habe ich umfangreiche Kenntnisse in modernen Technologien wie React, Node.js und Datenbankmanagementsystemen erworben.
                        Ich liebe es, komplexe Probleme zu lösen und dabei stets den Nutzer im Fokus zu behalten.

                    </p>
                    <p className='text-muted-foreground'>
                        Ich bin stets bestrebt, meine Fähigkeiten weiterzuentwickeln und neue Technologien zu erlernen, um innovative und effiziente Lösungen zu schaffen.
                        In meiner Freizeit experimentiere ich gerne mit neuen Frameworks und arbeite an Open-Source-Projekten, um meine Leidenschaft für das Programmieren zu vertiefen.
                  
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className='cosmic-button'>
                            {" "}
                            Schreib mir gern!
                        </a>

                        <a href="" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all'>
                         {" "}
                            CV herunterladen
                        </a>

                    </div>

                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                              <Code  className="h-6 w-6 text-primary"></Code>

                            </div>
                            <div className="text-left">
                                <h4 className='text-lg font-semibold'>
                                    Webentwicklung
                                </h4>
                                <p className='text-muted-foreground'>
                                    Erstellung von responsiven Websites und Webanwendungen mit modernen Frameworks.
                                </p>


                            </div>

                        </div>
                    </div>
                    <div className="gradient border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                              <User   className="h-6 w-6 text-primary"></User>

                            </div>
                             <div className="text-left">
                                <h4 className='text-lg font-semibold'>
                                    UI/UX Design
                                </h4>
                                <p className='text-muted-foreground'>
                                    Erstellung von responsiven Websites und Webanwendungen mit modernen Frameworks.
                                </p>


                            </div>

                        </div>
                    </div>
                    <div className="gradient border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                              <Briefcase  className="h-6 w-6 text-primary"></Briefcase>

                            </div>
                            <div className="text-left">
                                <h4 className='text-lg font-semibold'>
                                    Projektmanagement
                                </h4>
                                <p className='text-muted-foreground'>
                                    Leading projects from conception to deployment, ensuring timely delivery and quality.
                                </p>


                            </div>
                            

                        </div>
                    </div>

                </div>

            </div>


        </div>

    </section>
  )
}

export default AboutMe