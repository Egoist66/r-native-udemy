import {PureComponent, ReactNode} from "react";
import { ErrorMessage } from "./ErrorMessage";
import { Text } from "react-native";

interface ErorBoundaryProps {
    onTryhandler?: () => void;
    error: boolean;
    children: ReactNode;
}

interface ErrorBoundaryState {
    appError: boolean
}

class ErrorBoundary extends PureComponent<ErorBoundaryProps, ErrorBoundaryState> {
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
