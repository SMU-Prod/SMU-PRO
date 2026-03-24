"use client";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-4 text-center">
          <p className="text-sm text-red-400">Algo deu errado ao carregar este componente.</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="mt-2 text-xs text-muted hover:text-foreground underline"
          >
            Tentar novamente
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
