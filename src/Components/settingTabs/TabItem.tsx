'use client'
import * as Tab from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

interface TabItemProps{
    description: string,
    value: string,
    isSelected?: boolean
}

export function TabItem({description, value, isSelected = false} : TabItemProps){
    return(
        <Tab.Trigger value={value} className='relative px-1 pb-4 text-sm font-medium text-zinc-100 hover:text-violet-600  data-[state=active]:text-violet-600'>
            <span>
                {description}
            </span>
            {
                isSelected && (
                    <motion.div
                    layoutId="activeTab"
                    className='absolute -bottom-px right-0 left-0 h-px bg-violet-600'/>
                )
            }
        </Tab.Trigger>
    )
}