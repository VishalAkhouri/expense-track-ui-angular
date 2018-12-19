import { IAction } from '../shared/models/IAction.model';
import { ListExpensesAction } from '../shared/actions/list-expenses.action';

export interface ListExpensesState {
    pageLoading: boolean;
    listResponse: any;
}

export const INITIAL_STATE: ListExpensesState = {
    pageLoading: true,
    listResponse: undefined
};

export function listExpensesReducer(lastState: ListExpensesState, action: IAction): ListExpensesState {

    switch (action.type) {
        case ListExpensesAction.LIST_RESPONSE:
            return Object.assign({}, lastState, {listResponse: action.payload});
    }
    return lastState;
}
