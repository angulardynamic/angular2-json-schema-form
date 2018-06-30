import { WidgetEditorLibraryService } from '../widget-editor-library/widget-editor-library.service';
import { Framework } from './framework';
export declare class FrameworkEditorLibraryService {
    private frameworks;
    private widgetLibrary;
    activeFramework: Framework;
    stylesheets: (HTMLStyleElement | HTMLLinkElement)[];
    scripts: HTMLScriptElement[];
    loadExternalAssets: boolean;
    defaultFramework: string;
    frameworkLibrary: {
        [name: string]: Framework;
    };
    constructor(frameworks: any[], widgetLibrary: WidgetEditorLibraryService);
    setLoadExternalAssets(loadExternalAssets?: boolean): void;
    setFramework(framework?: string | Framework, loadExternalAssets?: boolean): boolean;
    registerFrameworkWidgets(framework: Framework): boolean;
    hasFramework(type: string): boolean;
    getFramework(): any;
    getFrameworkWidgets(): any;
    getFrameworkStylesheets(load?: boolean): string[];
    getFrameworkScripts(load?: boolean): string[];
}
