import { createContext, ReactNode, useCallback, useEffect, useState } from 'react'
import { api } from '../lib/api'

export interface UserInfo {
  login: string,
  avatar_url: string,
  name: string,
  bio: string,
  followers: number,
  company: string,
  url: string
}

export interface Issues {
  id: number
  title: string
  login: string
  url: string
  created_at: Date
  body: string
  comments: number
}

interface IssuesContextType {
  user: UserInfo
  issues: Issues[]
  getIssues: (query?: string) => Promise<void>
}

interface IssuesResponse {
  id: number
  title: string
  user: {
    login: string
  }
  html_url: string
  created_at: Date
  body: string
  comments: number
}

export const IssuesContext = createContext({} as IssuesContextType)

interface IssuesContextProviderProps {
  children: ReactNode
}
export function IssuesContextProvider({ children }: IssuesContextProviderProps) {
  const [user, setUser] = useState<UserInfo>({} as UserInfo)
  const [issues, setIssues] = useState<Issues[]>([])

  const getUserInfo = useCallback(async (url: string) => {
    const response = await api.get(url)

    const data = response.data

    const userInfo = {
      login: data.login,
      avatar_url: data.avatar_url,
      name: data.name,
      bio: data.bio,
      followers: data.followers,
      company: data.company,
      url: data.html_url,
    }

    setUser(userInfo)
  }, [])

  async function getIssues(query?: string) {
    if (!query) {
      query = ''
    } else {
      query += '%20'
    }
    const response = (await api.get(`/search/issues?q=${query}repo:guilhermecandidosantos/ignite-github-blog`))
    const responseData = response.data.items as IssuesResponse[]
    const data = responseData.map(issues => {
      return {
        id: issues.id,
        title: issues.title,
        login: issues.user.login,
        url: issues.html_url,
        created_at: new Date(issues.created_at),
        body: issues.body,
        comments: issues.comments,
      }
    })

    setIssues(data)
  }

  useEffect(() => {
    getUserInfo('/users/guilhermecandidosantos')
    getIssues()
  }, [getUserInfo])

  return (
    <IssuesContext.Provider value={{
      user,
      getIssues,
      issues,
    }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
