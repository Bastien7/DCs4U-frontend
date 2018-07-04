import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@dsc4u/Core/Header/header.component';
import { LoaderComponent } from '@dsc4u/Core/Loader/loader.component';
import { MenuBarComponent } from '@dsc4u/Core/Menu-Bar/menu-bar.component';

@NgModule({
    imports: [ CommonModule, MatProgressSpinnerModule, RouterModule ],
    exports: [ HeaderComponent, LoaderComponent ],
    declarations: [ HeaderComponent, LoaderComponent, MenuBarComponent ],
    providers: [],
})
export class CoreModule { }
