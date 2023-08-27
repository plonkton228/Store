declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare module '*.png' {
    const value: any
    export default value
}

declare module '*.json' {
    const value: any
    export default value
}

declare const ISDEV: boolean
