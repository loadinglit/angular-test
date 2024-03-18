import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'emp',
        loadChildren: () => import ('./emp/emp-routing.module').then((m) =>m.EmpRoutingModule)
    }
];
