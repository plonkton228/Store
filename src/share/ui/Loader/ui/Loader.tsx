import useClassName from 'share/libs/ClassNames/useClassName'
import './Loader.scss'
interface LoaderProps {
    classNames?: string
}

export const Loader: React.FC<LoaderProps> = ({ classNames }: LoaderProps) => {
    return (<>
        <div className = {useClassName({ cls: 'lds-roller', mode: {}, classes: [classNames] })}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </>)
}
