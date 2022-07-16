import { useFormContext } from "react-hook-form";

import { useCycles } from "../../../../hooks/useCycle";

import { FormContainer, FormMinuteAmountInput, FormTaskInput } from "./styles";

export function NewCycleForm() {
  const { activeCycle } = useCycles();
  const { register } = useFormContext();
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <FormTaskInput
        type="text"
        id="task"
        placeholder="Dê o nome para o seu projeto"
        list="task-suggestions"
        disabled={!!activeCycle}
        {...register("task")}
      />
      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 1" />
        <option value="banana" />
      </datalist>

      <label htmlFor="minutesAmount">Durante</label>
      <FormMinuteAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={1}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  );
}
