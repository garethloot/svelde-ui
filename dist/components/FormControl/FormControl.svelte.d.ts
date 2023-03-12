import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        width?: import("./imports").TInputWidth;
        label?: string | undefined;
        message?: any;
        inline?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type FormControlProps = typeof __propDef.props;
export type FormControlEvents = typeof __propDef.events;
export type FormControlSlots = typeof __propDef.slots;
export default class FormControl extends SvelteComponentTyped<FormControlProps, FormControlEvents, FormControlSlots> {
}
export {};
