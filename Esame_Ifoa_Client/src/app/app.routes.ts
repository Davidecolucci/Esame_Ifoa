import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'contact', pathMatch: 'full' },
    { path: 'contact', loadComponent: () => import('./contact/components/browse-contact/browse-contact.component').then(m => m.BrowseContactComponent) },
    { path: 'add-contact', loadComponent: () => import('./contact/components/add-contact/add-contact.component').then(m => m.AddContactComponent) },
];
