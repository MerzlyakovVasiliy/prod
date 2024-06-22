import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { PageError } from 'widgets/PageError';

interface ErrorBounfaryProps {
    children: ReactNode
}
interface ErrorBoundartState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<
    ErrorBounfaryProps,
    ErrorBoundartState
> {
    constructor(props: ErrorBounfaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return (
                <Suspense fallback="">
                    <PageError />
                </Suspense>
            );
        }

        return children;
    }
}

// import React, { ErrorInfo, Suspense } from 'react';
// import { PageError } from 'widgets/PageError';
//
// interface ErrorBoundaryProps {
//     children?: React.ReactNode;
// }
//
// interface ErrorBoundaryState {
//     hasError: boolean;
// }
//
// class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
//     constructor(props: ErrorBoundaryProps) {
//         super(props);
//         this.state = { hasError: false };
//     }
//
//     static getDerivedStateFromError(error: Error) {
//         // Update state so the next render will show the fallback UI.
//         return { hasError: true };
//     }
//
//     componentDidCatch(error: Error, errorInfo: ErrorInfo) {
//         // You can also log the error to an error reporting service
//         console.log(error, errorInfo);
//     }
//
//     render() {
//         const { hasError } = this.state;
//         const { children } = this.props;
//
//         if (hasError) {
//             // You can render any custom fallback UI
//             return <Suspense fallback=""><PageError /></Suspense>;
//         }
//
//         return children;
//     }
// }
//
// export default ErrorBoundary;
