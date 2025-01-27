import type { Media } from './payload-types'
import type { Block } from 'payload'

interface ContentRow {
  header: string
  logo?: Media | null
  richText?: any // Replace 'any' with the correct type for richText if available
  enableLink?: boolean
  link?: {
    type: string
    url: string
    newTab?: boolean
  }
}

export interface CustomContentBlock extends Omit<Block, 'blockType'> {
  blockType: 'content'
  contentRows: ContentRow[]
}
