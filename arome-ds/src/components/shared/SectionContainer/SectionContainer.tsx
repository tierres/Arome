import { ReactNode } from 'react'
import classes from './SectionContainer.module.css'

interface Params {
 children: ReactNode
 className?: string
}

export const SectionContainer = (params: Params) => {
    return(
        <section className={classes.sectionContainer + " " + params.className}>
            {params.children}
        </section>
    )
}