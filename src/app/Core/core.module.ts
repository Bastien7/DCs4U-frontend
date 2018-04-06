import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material';
import { HeaderComponent } from '@dsc4u/Core/Header/header.component';
import { LoaderComponent } from '@dsc4u/Core/Loader/loader.component';
import { MenuBarComponent } from '@dsc4u/Core/Menu-Bar/menu-bar.component';

@NgModule({
    imports: [ CommonModule, MatProgressSpinnerModule ],
    exports: [ HeaderComponent, LoaderComponent, MenuBarComponent ],
    declarations: [ HeaderComponent, LoaderComponent, MenuBarComponent ],
    providers: [],
})
export class CoreModule { }
