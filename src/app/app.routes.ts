import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: '404', component: NotFoundComponent },
    { path: '', component: DashboardComponent },
    { path: '**', component: NotFoundComponent }
];
