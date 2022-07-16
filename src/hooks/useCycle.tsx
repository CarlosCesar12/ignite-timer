import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import { ICycle } from "../@types/Cycle";
import { CyclesReducers } from "../reducers/Cycles/cycles";
import {
  addNewCycleAction,
  interrupedCycleAction,
  markCurrentCycleAsFinishedAction,
} from "../reducers/Cycles/actions";
import { differenceInSeconds } from "date-fns";

interface CyclesContextData {
  activeCycle: ICycle | undefined;
  cycles: ICycle[];
  amountSecondsPassed: number;
  activeCycleId: string | null;
  createNewCycles: (data: NewCreateCycleProps) => void;
  markCurrentCycleFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
  InterruptedCycle: () => void;
}

const CyclesContext = createContext<CyclesContextData>({} as CyclesContextData);

type NewCreateCycleProps = {
  task: string;
  minutesAmount: number;
};

type CycleProviderProps = {
  children: ReactNode;
};

export function CycleProvider({ children }: CycleProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    CyclesReducers,
    {
      cycles: [],
      activeCycleId: null,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        "@ignite-time:cycles-state-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }
    }
  );

  const { cycles, activeCycleId } = cyclesState;
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
    }
    return 0;
  });

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);

    localStorage.setItem("@ignite-time:cycles-state-1.0.0", stateJSON);
  }, [cyclesState]);

  function createNewCycles(data: NewCreateCycleProps) {
    const id = String(new Date().getTime());

    const newCycle: ICycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    dispatch(addNewCycleAction(newCycle));
    setAmountSecondsPassed(0);
  }

  function markCurrentCycleFinished() {
    dispatch(markCurrentCycleAsFinishedAction());
  }

  function InterruptedCycle() {
    dispatch(interrupedCycleAction());
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        createNewCycles,
        markCurrentCycleFinished,
        setSecondsPassed,
        InterruptedCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}

export function useCycles() {
  const context = useContext(CyclesContext);

  return context;
}
