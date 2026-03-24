import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import(`./modules/home/home-module`).then(m => m.HomeModule)
    }
];
