import { produce } from "immer";

import { ICycle } from "../../@types/Cycle";
import { ActionType } from "./actions";

interface CycleState {
  cycles: ICycle[];
  activeCycleId: string | null;
}

export function CyclesReducers(state: CycleState, action: any) {
  switch (action.type) {
    case ActionType.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle);
        draft.activeCycleId = action.payload.newCycle.id;
      });
    case ActionType.MARK_CURRENT_CYCLE_AS_FINISHED: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId;
      });

      if (currentCycleIndex < 0) {
        return state;
      }

      return produce(state, (draft) => {
        (draft.cycles[currentCycleIndex].fineshedDate = new Date()),
          (draft.activeCycleId = null);
      });
    }
    case ActionType.INTERRUPT_CURRENT_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId;
      });

      if (currentCycleIndex < 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft.cycles[currentCycleIndex].interruptedDate = new Date();
        draft.activeCycleId = null;
      });
    }
    default:
      return state;
  }
}
