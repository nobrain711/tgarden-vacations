import { lazy } from 'react';

const Vacations = lazy(() => import('./Vacations'));

export const VacationsConfig = {
    routes: [
        {
            path: 'employee/vacations',
            element: <Vacations />
        }
    ]
};