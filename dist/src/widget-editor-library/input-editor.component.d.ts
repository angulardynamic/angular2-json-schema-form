import { OnInit, ElementRef, ComponentFactoryResolver, ChangeDetectorRef, ViewContainerRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { DragDropService, DragDropConfig } from 'ng2-dnd';
import { JsonSchemaFormService } from '../json-schema-form.service';
export declare class InputEditorComponent implements OnInit {
    private jsf;
    protected element: ElementRef;
    protected componentFactory: ComponentFactoryResolver;
    protected viewContainerRef: ViewContainerRef;
    protected changeDetector: ChangeDetectorRef;
    protected service: DragDropService;
    protected config: DragDropConfig;
    formControl: AbstractControl;
    controlName: string;
    controlValue: string;
    controlDisabled: boolean;
    boundControl: boolean;
    options: any;
    autoCompleteList: string[];
    layoutNode: any;
    layoutIndex: number[];
    dataIndex: number[];
    constructor(jsf: JsonSchemaFormService, element: ElementRef, componentFactory: ComponentFactoryResolver, viewContainerRef: ViewContainerRef, changeDetector: ChangeDetectorRef, service: DragDropService, config: DragDropConfig);
    ngOnInit(): void;
    protected getId(): string;
    updateValue(event: any): void;
}
