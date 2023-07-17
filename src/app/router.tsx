import { createBrowserRouter, Outlet } from 'react-router-dom';
import ANALYSIS_ROUTES from './routes/ANALYSIS_ROUTES';
import HOME_ROUTES from './routes/HOME_ROUTES';
import MANAGEMENT_ROUTES from './routes/MANAGEMENT_ROUTES';
import AnalysisLayout from '../component/layouts/containerLayout/AnalysisLayout';

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <>
                homeLayout
                <div>
                    <Outlet />
                </div>
            </>,
            children: [
                {
                    path: "/",
                    children: HOME_ROUTES,
                },
                {
                    path: "/management",
                    element: <>
                        ManagementLayout
                        <div>
                            <Outlet />
                        </div>
                    </>,
                    children: MANAGEMENT_ROUTES,
                },
                {
                    path: "/analysis",
                    element: <AnalysisLayout />,
                    children: ANALYSIS_ROUTES,
                },
            ],
        },
    ],
    {
        basename: "/fin-the-pen-web-v2",
    }
);

export default router;
