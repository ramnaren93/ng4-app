import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReciepiesComponent } from './reciepies/reciepies.component';
import { ReciepeListComponent } from './reciepies/reciepe-list/reciepe-list.component';
import { ReciepeDetailComponent } from './reciepies/reciepe-detail/reciepe-detail.component';
import { ReciepeItemComponent } from './reciepies/reciepe-list/reciepe-item/reciepe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReciepiesComponent,
    ReciepeListComponent,
    ReciepeDetailComponent,
    ReciepeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
