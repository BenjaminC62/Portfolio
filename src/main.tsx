import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './styles/index.css'

import {RouterProvider} from 'react-router-dom'
import {router} from './routes/Routes.tsx'
import {I18nextProvider} from "react-i18next";
import i18n from "i18next";
import './i18n/i18n.ts';

/**
 * The main component of the app
 */
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <I18nextProvider i18n={i18n}>
            <RouterProvider router={router}/>
        </I18nextProvider>
    </StrictMode>,
)
