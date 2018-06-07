import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { JsonSchemaFormService } from '../json-schema-form.service';

import { BASIC_WIDGETS } from './index';

@NgModule({
  imports:         [ CommonModule, FormsModule, ReactiveFormsModule, SharedModule ],
  declarations:    [ ...BASIC_WIDGETS ],
  exports:         [ ...BASIC_WIDGETS, SharedModule ],
  entryComponents: [ ...BASIC_WIDGETS ],
  providers:       [ JsonSchemaFormService ]
})
export class WidgetEditorLibraryModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WidgetEditorLibraryModule,
      providers: [ JsonSchemaFormService ]
    };
  }
}
