import React, { CSSProperties } from "react";
import { DragInitHandler } from "./DragInitiator";
interface TabBarRootNodeProps {
    style?: CSSProperties;
    children: React.ReactElement;
    extraContent?: React.ReactElement;
    onKeyDown?: React.KeyboardEventHandler;
    saveRef: Function;
    onDragInit: DragInitHandler;
}
export declare class DockTabBarRootNode extends React.PureComponent<TabBarRootNodeProps, any> {
    render(): JSX.Element;
}
interface DockTabBarProps {
    onDragInit: DragInitHandler;
}
export declare class DockTabBar extends React.PureComponent<DockTabBarProps, any> {
    render(): JSX.Element;
}
export {};
