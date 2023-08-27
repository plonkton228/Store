type mode = Record<string, string | boolean>
interface ClassNameType {
    cls: string
    mode: mode
    classes: string[]
}
const useClassName = ({ cls, mode = {}, classes = [] }: ClassNameType): string => {
    return [
        cls,
        ...Object.entries(mode)
            .filter((element, index) => Boolean(element[1])).map((value) => value[0]),
        ...classes
    ].join(' ')
}

export default useClassName
