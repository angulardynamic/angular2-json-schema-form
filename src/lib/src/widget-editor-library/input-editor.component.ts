import { Component, Input, OnInit, ElementRef, ComponentFactoryResolver, Injector,
    ChangeDetectorRef, HostBinding, ViewContainerRef, ViewChild, Directive
} from '@angular/core';
import { AbstractControl } from '@angular/forms';
// import { Droppable } from './abstract/droppable';
import { DragDropService, DragDropConfig } from 'ng2-dnd';
import { Register, Registerable } from './decorators/register.decorator';

import { JsonSchemaFormService } from '../json-schema-form.service';

@Component({
  selector: 'input-widget',
  template: `
    <div
     [class]="options?.htmlClass || ''">
      <label *ngIf="options?.title"
        [attr.for]="'control' + layoutNode?._id"
        [class]="options?.labelHtmlClass || ''"
        [style.display]="options?.notitle ? 'none' : ''"
        [innerHTML]="options?.title"></label>
      <input *ngIf="boundControl"
        [formControl]="formControl"
        [attr.aria-describedby]="'control' + layoutNode?._id + 'Status'"
        [attr.list]="'control' + layoutNode?._id + 'Autocomplete'"
        [attr.maxlength]="options?.maxLength"
        [attr.minlength]="options?.minLength"
        [attr.pattern]="options?.pattern"
        [attr.placeholder]="options?.placeholder"
        [attr.required]="options?.required"
        [class]="options?.fieldHtmlClass || ''"
        [id]="'control' + layoutNode?._id"
        [name]="controlName"
        [readonly]="options?.readonly ? 'readonly' : null"
        [type]="layoutNode?.type">
      <input *ngIf="!boundControl"
        [attr.aria-describedby]="'control' + layoutNode?._id + 'Status'"
        [attr.list]="'control' + layoutNode?._id + 'Autocomplete'"
        [attr.maxlength]="options?.maxLength"
        [attr.minlength]="options?.minLength"
        [attr.pattern]="options?.pattern"
        [attr.placeholder]="options?.placeholder"
        [attr.required]="options?.required"
        [class]="options?.fieldHtmlClass || ''"
        [disabled]="controlDisabled"
        [id]="'control' + layoutNode?._id"
        [name]="controlName"
        [readonly]="options?.readonly ? 'readonly' : null"
        [type]="layoutNode?.type"
        [value]="controlValue"
        (input)="updateValue($event)">
        <datalist *ngIf="options?.typeahead?.source"
          [id]="'control' + layoutNode?._id + 'Autocomplete'">
          <option *ngFor="let word of options?.typeahead?.source" [value]="word">
        </datalist>
    </div>`
})
export class InputEditorComponent implements OnInit {
  formControl: AbstractControl;
  controlName: string;
  controlValue: string;
  controlDisabled = false;
  boundControl = false;
  options: any;
  autoCompleteList: string[] = [];
  @Input() layoutNode: any;
  @Input() layoutIndex: number[];
  @Input() dataIndex: number[];

  constructor(
    private jsf: JsonSchemaFormService,
    protected element: ElementRef,
    protected componentFactory: ComponentFactoryResolver,
    protected viewContainerRef: ViewContainerRef,
    protected changeDetector: ChangeDetectorRef,
    protected service: DragDropService,
    protected config: DragDropConfig
  ) {
    // super(element, componentFactory, viewContainerRef, changeDetector, service, config);

    // super.setSchema({
    //     type: 'object',
    //     properties: {
    //         custom_class: {
    //             type: 'string'
    //         },
    //         center_align: {
    //             type: 'boolean'
    //         }
    //     }
    // });

    // // this.acceptableItems.push('Column');
    // this._dragData.label = 'Input';
    // this._dragData.elementName = 'Input';
    // this._dragData.element = InputEditorComponent;
  }

  ngOnInit() {
    this.options = this.layoutNode.options || {};
    this.jsf.initializeControl(this);
  }

  protected getId() {
    // return '_' + Math.random().toString(36).substr(2, 9);
    return 'control' + this.layoutNode.id;
  }

  updateValue(event) {
    this.jsf.updateValue(this, event.target.value);
  }
}
