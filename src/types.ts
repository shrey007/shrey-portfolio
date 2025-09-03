export type ProjectLink = { label: string; href: string }

export type Project = {
  slug: string
  title: string
  role: string
  problem: string
  approach: string[]
  impact: string[]
  links?: ProjectLink[]
  demo?: { type: 'storyboard'; scenes: number }
  diagram?: string
  tags?: string[]
}


