import { createModel } from "cx/data";

// User info
export interface UserInfo {
    username: string;
    displayName: string;
}

// Login form
export interface LoginForm {
    username: string;
    password: string;
    valid: boolean;
}

// Layout state
export interface LayoutState {
    aside: {
        open: boolean;
    };
}

// Page filter for grids
export interface PageFilter {
    search: string;
    date: string;
    fromDate: string;
    toDate: string;
    page: number;
    pageSize: number;
    pageCount: number;
}

// Grid record
export interface GridRecord {
    field1: string;
    field2: number;
    field3: number;
    field4: number;
}

// Page state for grid pages
export interface GridPageState {
    filter: PageFilter;
    data: GridRecord[];
}

// Tabs page state
export interface TabsPageState {
    tab: string;
}

// Sandbox pages storage
export interface PagesStorage {
    [key: string]: unknown;
}

// Root app model
export interface AppModel {
    url: string;
    user: UserInfo | null;
    login: LoginForm;
    layout: LayoutState;
    pages: PagesStorage;
    $page: GridPageState | TabsPageState;
}

export const m = createModel<AppModel>();
