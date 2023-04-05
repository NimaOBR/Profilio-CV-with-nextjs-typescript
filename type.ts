import {IconType}from 'react-icons'

export interface Iservis {
    id:number,
    title:string,
    about:string,
    Icon:IconType
}
export interface ISkill {
    Icon:IconType,
    name:string,
    level:string,
}

export interface IProject {
    id:number,
    name:string,
    descriptions:string,
    image_path:string,
    deploy_url:string,
    github_url:string,
    category:Category[],
    key_tech:string[],
}

export type Category = "react"|"nextjs"|"typescript"

