import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { PanelModule } from 'primeng/panel';
import { RouterModule } from '@angular/router';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule, PanelModule, TableModule, TagModule, ButtonModule, IconFieldModule, InputIconModule, InputTextModule, ToolbarModule,
    BadgeModule
  ],
  exports:[
    CommonModule, RouterModule, PanelModule, TableModule, TagModule, ButtonModule, IconFieldModule, InputIconModule, InputTextModule, ToolbarModule,
    BadgeModule
  ]
})
export class SharedIndexModule { }
