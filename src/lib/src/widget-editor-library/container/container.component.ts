import { Component, ElementRef, ChangeDetectorRef, ComponentFactoryResolver,
    Injector, Directive, HostListener, HostBinding, ViewContainerRef,
    OnChanges, SimpleChanges
} from '@angular/core';
import { Droppable } from '../abstract/droppable';
import { DraggableComponent, DragDropService, DragDropConfig } from 'ng2-dnd';
import { Register, Registerable } from '../decorators/register.decorator';

@Component({
    selector: 'div[container]',
    styleUrls: ['./container.component.css', '../abstract/droppable.css'],
    templateUrl: './container.component.html',
    host: {
        '(onDropSuccess)': 'onDropItem($event)'
    }
})
@Register('Container')
export class ContainerComponent extends Droppable implements Registerable {

    constructor(
        protected element: ElementRef,
        protected componentFactory: ComponentFactoryResolver,
        protected viewContainerRef: ViewContainerRef,
        protected changeDetector: ChangeDetectorRef,
        protected service: DragDropService,
        protected config: DragDropConfig
    ) {
        super(element, componentFactory, viewContainerRef, changeDetector, service, config);

        this.setSchema({
            type: 'object',
            properties: {
                custom_class: {
                    type: 'string',
                },
                width: {
                    type: 'string',
                    enum: ['container', 'container-fluid']
                }
            }
        });

        this._dragData.label = 'Container';
        this._dragData.elementName = 'Container';
        this._dragData.element = ContainerComponent;

        this.acceptableItems.push('Row');
    }

    @HostBinding('class')
    get classes() {
        let classes = [];

        classes.push(this.formSchemaData.custom_class || '');

        if (this.formSchema.data) {
            classes.push(this.formSchemaData.width || 'container-fluid');
        }

        return classes.join(' ');
    }
}
