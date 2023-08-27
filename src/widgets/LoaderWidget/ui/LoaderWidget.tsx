import { Loader } from 'share/ui/Loader/ui/Loader'

interface LoaderWidgetProps {
    classNames?: string
    children?: React.ReactNode
}

export const LoaderWidget: React.FC<LoaderWidgetProps> = ({ children, classNames }: LoaderWidgetProps) => {
    return (<>
        <div><Loader/></div>
    </>)
}
