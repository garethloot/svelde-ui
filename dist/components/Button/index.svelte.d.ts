import { SvelteComponentTyped } from "svelte";
import type { TBtnColors, TBtnShape, TBtnWidth } from './types';
declare const __propDef: {
    props: {
        title?: string | undefined;
        color?: TBtnColors;
        size?: import("../../types/global").TSize | undefined;
        shape?: TBtnShape | undefined;
        width?: TBtnWidth | undefined;
        outline?: boolean | undefined;
        loading?: boolean | undefined;
        noAnimation?: boolean | undefined;
        active?: boolean | undefined;
        disabled?: boolean | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        leftIcon: {};
        rightIcon: {};
    };
};
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
