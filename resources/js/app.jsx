import './bootstrap';
import '../css/app.css';

import { ThemeProvider } from "@material-tailwind/react";
import React from "react";

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <React.StrictMode>
                <ThemeProvider>
                    <App {...props} />
                </ThemeProvider>
            </React.StrictMode>
        );
    },
    progress: {
        color: '#F44336',
    },
});
