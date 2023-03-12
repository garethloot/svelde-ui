import { SvelteComponentTyped } from "svelte";
import type { TPaddingSize, TColor } from './types';
declare const __propDef: {
    props: {
        fluid?: boolean | undefined;
        xPadding?: TPaddingSize | undefined;
        yPadding?: TPaddingSize | undefined;
        backgroundColor?: TColor | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
