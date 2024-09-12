import type { ImgData } from './imgData'

export class Skill {
    title: string
    iconName: string
    description: string

    constructor(title: string, iconName: string, description: string) {
        this.title = title
        this.iconName = iconName
        this.description = description
    }
}
