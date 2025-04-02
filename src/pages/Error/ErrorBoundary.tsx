//@ts-nocheck

import { useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
    const error = useRouteError();
    console.log("🚀 ~ ErrorBoundary ~ error:", error)

    return (
        <section className="w-full min-h-screen flex flex-col justify-center items-center gap-y-3">
            <h2>Error Occured</h2>
            <div>{error?.message || error?.data || ''}</div>
        </section>
    );
};

export default ErrorBoundary;