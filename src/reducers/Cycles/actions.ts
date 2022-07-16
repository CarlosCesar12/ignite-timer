import { ICycle } from "../../@types/Cycle";

export enum ActionType {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  MARK_CURRENT_CYCLE_AS_FINISHED = "MARK_CURRENT_CYCLE_AS_FINISHED",
  INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE",
}

export function addNewCycleAction(newCycle: ICycle) {
  return {
    type: ActionType.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  };
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionType.MARK_CURRENT_CYCLE_AS_FINISHED,
  };
}

export function interrupedCycleAction() {
  return {
    type: ActionType.INTERRUPT_CURRENT_CYCLE,
  };
}
