import { StaticImageData } from "next/image";

export default interface Preview {
    title: string,
    name: string,
    imageUrl?: StaticImageData,
    description: string,
    siteUrl?: string,
    github: string,
    tags: string[]
}