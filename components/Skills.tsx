import React from 'react'
import Image from "next/image";
import SkillCard from './SkillCard';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-teal-500'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

            <SkillCard imagePath='/assets/python-original.svg' skillName='Python' />
            <SkillCard imagePath='/assets/fastapi-original.svg' skillName='FastAPI' />
            <SkillCard imagePath='/assets/javascript-original.svg' skillName='JavaScript' />
            <SkillCard imagePath='/assets/typescript-original.svg' skillName='TypeScript' />
            <SkillCard imagePath='/assets/react-original.svg' skillName='React' />
            <SkillCard imagePath='/assets/html5-original.svg' skillName='HTML5' />
            <SkillCard imagePath='/assets/tailwindcss-original.svg' skillName='Tailwind CSS' />
            <SkillCard imagePath='/assets/elasticsearch-original.svg' skillName='Elasticsearch' />
            <SkillCard imagePath='/assets/logstash-original.svg' skillName='Logstash' />
            <SkillCard imagePath='/assets/kibana-original.svg' skillName='Kibana' />
            <SkillCard imagePath='/assets/docker-original.svg' skillName='Docker' />
            <SkillCard imagePath='/assets/kubernetes-original.svg' skillName='Kubernetes' />

            </div>
        </div>
    </div>
  )
}

export default Skills

