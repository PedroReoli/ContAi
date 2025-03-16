"use client"

import type React from "react"
import { useState, createContext, useContext, type ReactNode } from "react"
import { cn } from "@/lib/utils"

// Context for managing tab state
type TabsContextType = {
  activeTab: string
  setActiveTab: (id: string) => void
}

const TabsContext = createContext<TabsContextType | undefined>(undefined)

// Hook to use tabs context
const useTabsContext = () => {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error("Tabs components must be used within a TabsProvider")
  }
  return context
}

// Main Tabs container
export interface TabsProps {
  defaultTab: string
  children: ReactNode
  className?: string
  onChange?: (tabId: string) => void
}

export const Tabs: React.FC<TabsProps> = ({ defaultTab, children, className, onChange }) => {
  const [activeTab, setActiveTab] = useState(defaultTab)

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    onChange?.(tabId)
  }

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab: handleTabChange }}>
      <div className={cn("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  )
}

// Tab List component (container for tab buttons)
export interface TabListProps {
  children: ReactNode
  className?: string
}

export const TabList: React.FC<TabListProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        className,
      )}
    >
      {children}
    </div>
  )
}

// Individual Tab button
export interface TabProps {
  id: string
  children: ReactNode
  className?: string
  disabled?: boolean
}

export const Tab: React.FC<TabProps> = ({ id, children, className, disabled = false }) => {
  const { activeTab, setActiveTab } = useTabsContext()
  const isActive = activeTab === id

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={`tabpanel-${id}`}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isActive ? "bg-background text-foreground shadow-sm" : "hover:bg-background/50 hover:text-foreground",
        className,
      )}
      onClick={() => setActiveTab(id)}
    >
      {children}
    </button>
  )
}

// Tab Panel component (content for each tab)
export interface TabPanelProps {
  id: string
  children: ReactNode
  className?: string
}

export const TabPanel: React.FC<TabPanelProps> = ({ id, children, className }) => {
  const { activeTab } = useTabsContext()
  const isActive = activeTab === id

  if (!isActive) return null

  return (
    <div
      role="tabpanel"
      id={`tabpanel-${id}`}
      aria-labelledby={`tab-${id}`}
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
      tabIndex={0}
    >
      {children}
    </div>
  )
}

