import React, {PureComponent, ReactNode} from "react";
import {ErrorMessage} from "./ErrorMessage";
import {Text} from "react-native";

interface ErrorBoundaryProps {
    onTryhandler?: () => void;
    error: boolean;
    children: ReactNode;
}

interface ErrorBoundaryState {
    appError: boolean
}

class ErrorBoundary extends PureComponent<ErrorBoundaryProps, ErrorBoundaryState> {
    static defaultProps = {
        error: false,
    };

    state: Readonly<ErrorBoundaryState> = {
        appError: false
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({
            appError: true
        })

        console.log({error, errorInfo})
    }



    render(): ReactNode {
        if (this.props.error || this.state.appError) {
            return (
                <>
                  

                    {!this.state.appError ? <ErrorMessage
                        onTryHandler={this.props.onTryhandler}
                        errorText="Something went wrong..."
                    /> : <Text>Something went wrong</Text>}
                </>
            );
        }

        return this.props.children;
    }
}


export default ErrorBoundary;
