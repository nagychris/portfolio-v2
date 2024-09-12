import type { ImgData } from './imgData'

export class WorkStation {
    position: string
    company: string
    companyUrl: string
    location: string
    period: string
    experience: string[] = []
    icon: ImgData

    constructor(
        position: string,
        company: string,
        companyUrl: string,
        location: string,
        period: string,
        experience: string[] = [],
        icon: ImgData
    ) {
        this.position = position
        this.company = company
        this.companyUrl = companyUrl
        this.location = location
        this.period = period
        this.icon = icon
        this.experience = experience
    }
}
