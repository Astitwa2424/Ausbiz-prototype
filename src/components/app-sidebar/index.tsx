'use client'

import { Calendar, Home, Info, Mail, School, Settings, Users, Briefcase, Moon } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarGroupLabel as SidebarGroupLabel2,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarFooter,
} from '@/components/ui/sidebar'
import { useState } from 'react'
import { ThemeSelector } from 'src/providers/Theme/ThemeSelector'

const items = [
  {
    title: 'Home',
    url: 'https://ausbiz-prototype.vercel.app/',
    icon: Home,
  },
  {
    title: 'About Us',
    icon: Info,
    items: [
      {
        title: 'Company Profile',
        url: 'https://ausbiz-prototype.vercel.app/company-overview',
      },
      { title: 'Team', url: 'https://ausbiz-prototype.vercel.app/our-team' },
      { title: 'Academic Partners', url: 'https://ausbiz-prototype.vercel.app/academic-partners' },
      { title: 'Testimonials', url: 'https://ausbiz-prototype.vercel.app/testimonials' },
    ],
  },
  {
    title: 'Training',
    icon: School,
    items: [
      { title: 'On-site', url: 'https://ausbiz-prototype.vercel.app/on-site-training-' },
      { title: 'Remote', url: 'https://ausbiz-prototype.vercel.app/remote-training' },
      { title: 'Tech Bootcamp', url: 'https://tech-bootcamp.vercel.app/' },
    ],
  },
  {
    title: 'Services',
    url: 'https://ausbiz-prototype.vercel.app/our-services',
    icon: Briefcase,
  },
  {
    title: 'Contact Us',
    url: 'https://ausbiz-prototype.vercel.app/contact-us',
    icon: Mail,
  },
]

export function AppSidebar() {
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({})
  return (
    <Sidebar className="bg-[#1C1C1C] border-r border-gray-800">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="p-4 flex justify-center mb-4">
            <img
              src="https://media.licdn.com/dms/image/v2/C4E0BAQGKGA1GyNOftw/company-logo_200_200/company-logo_200_200/0/1658570032831?e=1746057600&v=beta&t=2VIef2LzADJ_qnbzablocf0YNtDgwIjJBovSYltzYQw"
              alt="Ausbiz Consulting Logo"
              className="w-16 h-16 object-cover rounded-full"
            />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="px-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg"
                    onClick={() => {
                      if (item.items) {
                        setOpenDropdowns((prev) => ({ ...prev, [item.title]: !prev[item.title] }))
                      }
                    }}
                  >
                    {item.items ? (
                      <button className="w-full flex items-center justify-between">
                        <div className="flex items-center">
                          <item.icon className="h-5 w-5 mr-2" />
                          <span>{item.title}</span>
                        </div>
                        <span
                          className={`transform transition-transform duration-200 ${openDropdowns[item.title] ? 'rotate-180' : ''}`}
                        >
                          ▼
                        </span>
                      </button>
                    ) : (
                      <a href={item.url} className="w-full flex items-center">
                        <item.icon className="h-5 w-5 mr-2" />
                        <span>{item.title}</span>
                      </a>
                    )}
                  </SidebarMenuButton>
                  {item.items && (
                    <SidebarMenuSub
                      className={`ml-4 border-l border-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${openDropdowns[item.title] ? 'max-h-96' : 'max-h-0'}`}
                    >
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton
                            asChild
                            className="text-gray-400 hover:text-white hover:bg-gray-800"
                          >
                            <a href={subItem.url}>{subItem.title}</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-gray-800 p-4">
        <ThemeSelector />
      </SidebarFooter>
    </Sidebar>
  )
}
