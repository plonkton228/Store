import React, { type ErrorInfo } from 'react'
import { ErrorMessage } from 'share/ui/ErrorMessage'
interface ErrorBoundaryProps {
    children?: React.ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor (props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError (_: Error): ErrorBoundaryState {
        return { hasError: true }
    }

    componentDidCatch (error: Error, info: ErrorInfo): void {
        console.log('uncaught error', error, info.componentStack)
    }

    render () {
        if (this.state.hasError) {
            return <ErrorMessage/>
        }

        return this.props.children
    }
}
