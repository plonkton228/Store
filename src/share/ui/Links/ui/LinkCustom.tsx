import { Link, type LinkProps } from 'react-router-dom'
import useClassName from 'share/libs/ClassNames/useClassName'
import classesStyle from './Links.module.scss'

export enum Themes {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface LinksProps extends LinkProps {
    classNames?: string
    children?: React.ReactNode
    theme?: Themes
}

export const LinkCustom: React.FC<LinksProps> = ({ classNames, children, to, theme }: LinksProps) => {
    return (<>
        <Link to={to} className= {useClassName({ cls: classesStyle.Link, mode: {}, classes: [classesStyle[theme], classNames] })} >{children}</Link>
    </>)
}
