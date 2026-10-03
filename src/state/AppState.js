import React, { createContext, useContext, useState } from 'react';
import { todayWorkout } from '../data/mockWorkouts';

const Ctx = createContext(null);
export const useApp = () => useContext(Ctx);

export function AppStateProvider({ children }) {
  const [plan, setPlan] = useState(todayWorkout);
  const [done, setDone] = useState({ workouts: 0, minutes: 0, calories: 0 });
  const [personalized, setPersonalized] = useState(true);
  const completeWorkout = (w) =>
    setDone((d) => ({ workouts: d.workouts + 1, minutes: d.minutes + w.duration, calories: d.calories + w.calories }));
  return <Ctx.Provider value={{ plan, setPlan, done, completeWorkout, personalized, setPersonalized }}>{children}</Ctx.Provider>;
}
