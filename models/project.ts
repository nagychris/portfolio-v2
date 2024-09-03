import type { Image } from './image'

export interface Project {
    name: string
    description: string
    tags: string[]
    url?: string
    image?: Image
}
