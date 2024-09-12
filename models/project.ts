import type { ImgData } from './imgData'

export class Project {
    name: string
    description: string
    tags: string[]
    url?: string
    image?: ImgData

    constructor(
        name: string,
        description: string,
        tags: string[],
        url?: string,
        image?: ImgData
    ) {
        this.name = name
        this.description = description
        this.tags = tags
        this.url = url
        this.image = image
    }
}
