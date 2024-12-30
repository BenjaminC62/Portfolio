import {Outlet} from "react-router"

import './i18n/i18n.ts';


/**
 *  The main component of the app
 *
 * @returns  The main component of the app
 */
function App() {
    return (
        <>
            <Outlet/>
        </>
    )
}

export default App
