import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DndModule, DragDropService } from 'ng2-dnd';

import { OrderableDirective } from '../shared/orderable.directive';

@NgModule({
  imports:         [ CommonModule, FormsModule, ReactiveFormsModule, DndModule.forRoot() ],
  declarations:    [ OrderableDirective ],
  exports:         [ DndModule, OrderableDirective ],
  entryComponents: [ ],
  providers:       [ DragDropService ]
})
export class SharedModule { }
