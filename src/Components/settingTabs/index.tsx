'use client'
import * as Tab from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function SettingTabs(){
    const [currentTab, setCurrentTab] = useState('tab1')
    return(
        <Tab.Root value={currentTab} onValueChange={(e) => setCurrentTab(e)}>
            <Tab.List className='mt-6 flex items-center gap-5 border-b border-zinc-50'>
               <TabItem value='tab1' description='Profile' isSelected={currentTab === 'tab1'}/>
               <TabItem value='tab2' description='User' isSelected={currentTab === 'tab2'}/>
               <TabItem value='tab3' description='Class' isSelected={currentTab === 'tab3'}/>
               <TabItem value='tab4' description='Teacher' isSelected={currentTab === 'tab4'}/>
            </Tab.List>
        </Tab.Root>
    )
}