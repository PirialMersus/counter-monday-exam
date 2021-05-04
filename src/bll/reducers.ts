const initialState = {
    value: 0,
    minValue: 0,
    maxValue: 5
}

type InitialStateType = typeof initialState


type CounterReducerActionType =
    AddValueToCounterType
    | SetMinValueActionType
    | SetMaxValueActionType

export const counterReducer = (state: InitialStateType = initialState, action: CounterReducerActionType): InitialStateType => {
    switch (action.type) {
        case "ADD-VALUE-TO-COUNTER":
            return {
                ...state,
                value: action.value
            }
        case "SET-MIN-VALUE":
            return {
                ...state,
                minValue: action.minValue
            }
        case "SET-MAX-VALUE":
            return {
                ...state,
                maxValue: action.maxValue
            }
        default:
            return state
    }
}

export type AddValueToCounterType = ReturnType<typeof addValueToCounterAC>;
export const addValueToCounterAC = (value: number) => {
    return ({
        type: "ADD-VALUE-TO-COUNTER",
        value
    } as const)
}

export type SetMinValueActionType = ReturnType<typeof setMinValueAC>;
export const setMinValueAC = (minValue: number) => {
    return ({
        type: "SET-MIN-VALUE",
        minValue
    } as const)
}

export type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>;
export const setMaxValueAC = (maxValue: number) => {
    return ({
        type: "SET-MAX-VALUE",
        maxValue
    } as const)
}
