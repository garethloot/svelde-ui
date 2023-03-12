import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        label?: string | undefined;
        color?: import("../Section/types").TColor | undefined;
        width?: import("../FormControl/imports").TInputWidth;
        message?: any;
        size?: import("../../types/global").TSize | undefined;
        disabled?: boolean | undefined;
        inline?: boolean | undefined;
        checked?: boolean | undefined;
    };
    events: {
        change: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
