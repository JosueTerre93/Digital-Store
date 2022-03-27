import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { ProductosComponent } from './productos/productos.component';
import { InsumosComponent } from './insumos/insumos.component';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductosComponent,
    InsumosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatTableModule,
    MatDividerModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
