import React, { useState } from 'react'
import {cn} from '../lib/utils'

const skills = [
    //Frontend Skills
    {name: 'HTML/CSS', level: 95, category: 'Frontend'},
    {name: 'JavaScript', level: 90, category: 'Frontend'},
    {name: 'React', level: 85, category: 'Frontend'},
    {name: 'Tailwind CSS', level: 70, category: 'Frontend'},

    //Backend Skills
    {name: 'Node.js', level: 80, category: 'Backend'},
    {name: 'Express', level: 75, category: 'Backend'},
    {name: 'RESTful APIs', level: 70, category: 'Backend'},
    {name: 'PHP', level: 60, category: 'Backend'},

    //Database Skills

    {name: 'MongoDB', level: 70, category: 'Database'},
    {name: 'SQL', level: 65, category: 'Database'},
    {name: 'PostgreSQL', level: 60, category: 'Database'},
    {name: 'MySQL', level: 70, category: 'Database'},


    //Tools

    {name: 'Git/GitHub', level: 85, category: 'Tools'},
    {name: 'Docker', level: 60, category: 'Tools'},
    {name: 'VSCode', level: 90, category: 'Tools'},

]
 const categories = ['all', 'Frontend', 'Backend', 'Database', 'Tools'];


const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredSkills =skills.filter (
        (skill) => activeCategory === 'all' || skill.category === activeCategory
    );

  return (
    <section id='skills' className='py-24 px-4 relative bg-secondary/30'>
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Meine <span className="text-primary"> Skills</span>

            </h2>

            <div className='flex flex-wrap justify-center gap-4 mb-12'>
                {categories.map((category, key) => (
                    <button 
                     key={key} 
                     onClick={()=> setActiveCategory(category)}
                     className={cn('px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                        activeCategory === category 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-secondary/70 text-foreground hover:bg-secondary"

                     )}>
                        {category}</button>
                ))}

            </div>

            <div className="grid grid-cols-12 gap-4">
                {filteredSkills.map((skill, key) => (
                    <div 
                     key={key} 
                     className="bg-card col-span-12 md:col-span-6 p-6 rounded-lg shadow-xs card-hover animate-fade-in-delay-2">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">
                                {skill.name}  
                               
                            </h3>

                        </div>
                        
                        <div className="w-full bg-gray-600 rounded-full h-4 dark:bg-gray-700">
                            <div className="bg-blue-600 h-4 rounded-full text-xs" style={{width: `${skill.level}%`}}>{skill.level}%</div>
                        </div>

                          

                        </div>
               
                    
                ))}

            </div>

        </div>
    </section>
  )
}

export default SkillsSection