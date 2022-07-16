import * as zod from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { Play, HandPalm } from "phosphor-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { useCycles } from "../../hooks/useCycle";
import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";

import { HomeContainer, ButtonStop, ButtonStart } from "./styles";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(1, "O Ciclo precisa ser de no mínimo de 5 minutos")
    .max(60, "O Ciclo precisa ser de no máximo de 60 minutos"),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { createNewCycles, InterruptedCycle, activeCycle } = useCycles();

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycles(data);
    reset();
  }

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <ButtonStop onClick={InterruptedCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </ButtonStop>
        ) : (
          <ButtonStart disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </ButtonStart>
        )}
      </form>
    </HomeContainer>
  );
}
