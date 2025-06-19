export interface CurrencyItem {
    id: number;
    code: string;
    toSubRatio: number;
    value: number;
    label: string;
}

export interface APIDataProps {
    [key: string]: {
        code: string,
        value: number
    }
}

export interface APIResponse {
    meta: {
        last_updated_at: string;
    },
    data: {
        [key: string]: {
            code: string;
            value: number;
        }
    }
}