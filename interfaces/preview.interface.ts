import { StaticImageData } from "next/image";

export default interface Preview {
    title: string,
    imageUrl?: StaticImageData,
    description: string,
    siteUrl?: string,
    github: string,
    tags: string[]
}