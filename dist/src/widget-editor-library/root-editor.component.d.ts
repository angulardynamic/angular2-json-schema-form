import { EventEmitter } from '@angular/core';
import { JsonSchemaFormService } from '../json-schema-form.service';
export declare class RootEditorComponent {
    private jsf;
    options: any;
    dataIndex: number[];
    layoutIndex: number[];
    layout: any[];
    isOrderable: boolean;
    isFlexItem: boolean;
    onDrop: EventEmitter<any>;
    constructor(jsf: JsonSchemaFormService);
    backToMain(data: any): void;
    isDraggable(node: any): boolean;
    getFlexAttribute(node: any, attribute: string): any;
    showWidget(layoutNode: any): boolean;
}
