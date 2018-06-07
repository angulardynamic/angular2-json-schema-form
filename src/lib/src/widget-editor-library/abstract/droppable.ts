import {
    ComponentFactoryResolver, ViewContainerRef, ElementRef, EmbeddedViewRef,
    Injector, ChangeDetectorRef, Component, Input, OnInit, Type, HostBinding,
    HostListener, Output, EventEmitter, ComponentRef, Host, OnChanges, SimpleChanges
} from '@angular/core';
import { DraggableComponent, DragDropService, DragDropConfig, DroppableComponent } from 'ng2-dnd';
import { RegisterService } from '../decorators/register.decorator';

export abstract class Droppable extends DroppableComponent implements OnInit {

    protected itemData: any;
    protected componentRef: ComponentRef<any>;

    protected acceptableItems: any[];

    // @Input() _id: any;

    @Input() item: any;

    @Input() parent: Droppable;

    @Output() onClear: EventEmitter<any> = new EventEmitter<any>();
    @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();
    @Output() onDrop: EventEmitter<any> = new EventEmitter<any>();
    @Output() onElementHover: EventEmitter<any> = new EventEmitter<any>();

    protected formSchema: any = {
        schema: {},
        data: {},
        layout: {}
    };

    @Input() _dragData = {
        id: '',
        childrens: [],
        data: {},
        label: '',
        elementName: '',
        element: {}
    };

    constructor(
        protected element: ElementRef,
        protected componentFactory: ComponentFactoryResolver,
        protected viewContainerRef: ViewContainerRef,
        protected changeDetector: ChangeDetectorRef,
        protected service: DragDropService,
        protected config: DragDropConfig
    ) {
        super(element, service, config, changeDetector);
        this.acceptableItems = [];
    }

    protected get formSchemaData() {
        if (!this.item.data) {
            this.item.data = {};
        }
        return this.item.data;
    }

    @HostListener('onClear', ['$event'])
    public onClearEvent(data): void {
        let index = this.item.childrens.indexOf(data);

        if (index >= 0) {
            this.item.childrens.splice(index, 1);
        }
    }

    @HostListener('onSelect', ['$event'])
    public onSelectEvent(data): void {
        if (this.parent) {
            this.parent.onSelect.emit(data);
        }
    }

    @HostListener('click', ['$event'])
    public onClickEvent(e: MouseEvent): void {
        e.stopPropagation();

        let dataEmit = [this.item, this.formSchema];

        this.parent
            ? this.parent.onSelect.emit(dataEmit)
            : this.onSelect.emit(dataEmit);
    }

    @HostBinding('attr.hover') hover: boolean = false;

    @HostListener('mouseover', ['$event'])
    public onMouseHoverEvent(e: MouseEvent): void {
        this.hover = true;
        if (this.parent) {
            this.parent.onElementHover.emit();
        }

        e.stopPropagation();
    }

    @HostListener('onElementHover')
    public onElementHoverEvent(): void {
        this.hover = false;
    }

    @HostListener('mouseleave', ['$event'])
    public onMouseLeaveEvent(e: MouseEvent): void {
        this.hover = false;
        e.stopPropagation();
    }

    public ngOnInit(): void {
        if (this.item && this.item.childrens) {
            this.item.childrens.forEach(item => {
                let type = RegisterService.GetType(item.element);
                this.addItem(type, item);
            });
        }

        this.formSchema.data = this.formSchemaData || {};
    }

    protected setSchema(schema: any) {
        this.formSchema.schema = schema;
    }

    public onDragItem(e): any {
        console.log('   onDragItem', e);
        let elements = this.getById(e.dragData.id);
        console.log('       ', elements);
        if (elements && elements.length > 1) {
            this.selfDestruct(e);
        }
    }

    public onDropItem(e): any {
        console.log('Droppable:onDropItem', e);
        let dragData = e.dragData;
        const accept = this.acceptableItems.indexOf(dragData.elementName) > -1;

        if (accept) {

            let newItem = dragData.id ? dragData : {
                element: dragData.elementName,
                childrens: []
            };

            if (this.item.childrens === undefined) {
                this.item.childrens = [];
            }

            this.item.childrens.push(newItem);

            this.addItem(dragData.element, newItem);

            this.onDrop.emit(newItem);
        } else {
            console.log(`${dragData.elementName} can't be dropped into a ${this.getName(this)} component!`);
        }
    };

    public selfDestruct(e) {
        if (typeof e.stopPropagation === 'function') {
            e.stopPropagation();
        }
        if (this.componentRef) {
            this.componentRef.destroy();
            this.onClear.emit(this.itemData);
        } else {
            console.log('The main container can\'t be removed!');
        }
    }

    public addItem(component, newItem): Droppable {
        const componentFactory = this.componentFactory.resolveComponentFactory(component);

        let componentRef = this.viewContainerRef.createComponent(componentFactory);
        let componentIntance = (<Droppable>componentRef.instance);
        componentIntance.parent = this;
        componentIntance.componentRef = componentRef;
        componentIntance.item = newItem;
        newItem.id = newItem.id ? newItem.id : this.getId();
        componentIntance.itemData = newItem;
        componentIntance.onClear.subscribe(data => this.onClear.emit(data));
        componentIntance.onDrop.subscribe(data => this.onDrop.emit(data));
        componentIntance._dragData.id = newItem.id;
        componentIntance._dragData.childrens = newItem.childrens;
        componentIntance._dragData.data = newItem.data;

        this.viewContainerRef.element.nativeElement.appendChild((componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0]);

        return componentIntance;
    }

    public getName(inputClass) {
        let funcNameRegex = /function (.{1,})\(/;
        let results = (funcNameRegex).exec((<any>inputClass).constructor.toString());
        return (results && results.length > 1) ? results[1] : '';
    }

    protected getId() {
        console.log('   getId');
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    protected getRootParent(): any {
        console.log('   getRootParent');
        let rootParent = this.parent;
        console.log(rootParent);
        while (rootParent.parent) {
            rootParent = rootParent.parent;
        }
        return rootParent;
    }

    protected getById(id: any, elements: any[] = []): any[] {
        console.log('   getById: ', 'id:', id, 'elements:', elements);

        elements = elements.length === 0 ? this.getRootParent().item.childrens : elements;
        let results: any[];
        elements.forEach(el => {
            if (el.id && el.id === id) {
                if (results) {
                    results.push(el);
                } else {
                    results = [el];
                }
            }
            if (el.childrens && el.childrens.length > 0) {
                let temp = this.getById(id, el.childrens);
                if (temp && temp.length > 0) {
                    if (results) {
                        results.push(temp);
                    } else {
                        results = temp;
                    }
                }
            }
        });
        return results;
    }
}
