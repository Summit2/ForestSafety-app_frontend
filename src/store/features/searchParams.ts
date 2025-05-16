import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ValueType = string | number | boolean | null;
type ValueUnitType = ValueType | Array<ValueType>;

type OptionType = {
    [key: string]: ValueUnitType,
}

type ParamType = {
    key: string,
    value: ValueUnitType,
}

interface SearchParamsState {
    searchParams: OptionType,
    actionName: 
        `SET-${string}` | 
        `DELETE-${string}` | 
        `APPEND-${string}` | 
        'GET' | 
        'DESTROY' | 
        'DEL_AREA',
}

const initialState: SearchParamsState = {
    searchParams: {},
    actionName: 'GET',
}

const searchParamsSlice = createSlice({
    name: 'searchParams',
    initialState,
    reducers: {
        updateSearchParams(state, action: PayloadAction<OptionType>) {
            state.searchParams = { ...action.payload };
            state.actionName = 'GET';
        },
        setParam(state, action: PayloadAction<ParamType>) {
            const { key, value } = action.payload;
            state.searchParams[key] = value;
            state.actionName = `SET-${key}`;
        },
        appendParam(state, action: PayloadAction<ParamType>) {
            const { key, value } = action.payload;
            if (state.searchParams.hasOwnProperty(key)) {
                if (Array.isArray(state.searchParams[key])) {
                    let prevArray = state.searchParams[key] as ValueType[];
                    if (Array.isArray(value)) {
                        prevArray = [ ...prevArray, ...value ];
                    } else {
                        prevArray.push(value);
                    }
                    state.searchParams[key] =  [...prevArray ];
                } else {
                    const prevValue = state.searchParams[key] as ValueType;
                    if (Array.isArray(value)) {
                        state.searchParams[key] = [ prevValue, ...value ];
                    } else {
                        state.searchParams[key] = [ prevValue, value ];
                    }
                }
            } else {
                state.searchParams[key] = value;
            }
            state.actionName = `APPEND-${key}`;
        },
        deleteParam(state, action: PayloadAction<string>) {
            if (state.searchParams.hasOwnProperty(action.payload)) {
                delete state.searchParams[action.payload];
            }
            state.actionName = `DELETE-${action.payload}`;
        },
        deleteAreaId(state) {
            if (state.searchParams.hasOwnProperty('area')) {
                delete state.searchParams['area'];
            }
            state.actionName = 'DEL_AREA';
        },
        destroySearchParams(state) {
            state.searchParams = {};
            state.actionName = 'DESTROY';
        }
    }
});

export function getNumberParam(
    searchParams: OptionType,
    key: string
): number | null {
    if (Array.isArray(searchParams[key])) {
        const keyArr = searchParams[key] as ValueType[];
        if (keyArr.length === 0) {
            return null;
        }
        const value = Number(keyArr[0]);
        return isNaN(value) ? null : value;
    }
    const numberValue = Number(searchParams[key]);
    return isNaN(numberValue) ? null : numberValue;
}

export function getStringParam(
    searchParams: OptionType,
    key: string
): string {
    if (Array.isArray(searchParams[key])) {
        const keyArr = searchParams[key] as ValueType[];
        if (keyArr.length === 0) {
            return 'none';
        }
        const value = keyArr[0];
        return !value ? 'none' : value.toString();
    }
    const value = searchParams[key];
    return !value ? 'none' : value.toString();
}

export function getAreaId(searchParams: OptionType) {
    return getNumberParam(searchParams, 'area');
}

export function getAllParams(
    searchParams: URLSearchParams, 
    key: string
) {
    return searchParams.getAll(key);
}

export function handleOptions(options: OptionType): URLSearchParams {
    let paramArray: Array<[string, string]> = [];
    Object.entries(options).forEach(([key, value]) => {
        if (!Array.isArray(value) && value !== null) {
            paramArray.push([key, value.toString()]);
        } else if (value !== null) {
            value.forEach((valueUnit) => {
                if (valueUnit !== null) {
                    paramArray.push([key, valueUnit.toString()]);
                }
            });
        }
    });
    return new URLSearchParams(paramArray);
}

export function getOptionsFromSearchParams(url: URLSearchParams): OptionType {
    let options = {} as OptionType;
    [ ...url.entries() ].forEach(([key, value]) => {
        if (!options.hasOwnProperty(key)) {
            options[key] = value;
        } else {
            if (Array.isArray(options[key])) {
                let prevArray = options[key] as ValueType[];
                if (Array.isArray(value)) {
                    prevArray = [ ...prevArray, ...value ];
                } else {
                    prevArray.push(value);
                }
                options[key] =  [...prevArray ];
            } else {
                const prevValue = options[key] as ValueType;
                options[key] = [ prevValue, value ];
            }   
        }
    });
    return options;
}

export const {
    updateSearchParams, 
    setParam,
    appendParam,
    deleteParam,
    destroySearchParams
} = searchParamsSlice.actions;
export default searchParamsSlice.reducer;
