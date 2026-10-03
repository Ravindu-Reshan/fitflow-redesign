export const user = { name: 'Alex', goal: 'General fitness', streak: 5, totalWorkouts: 42 };

const ex = (id, name, amount, difficulty, muscles, icon) => ({ id, name, amount, difficulty, muscles, icon });
export const allExercises = [
  ex('1', 'Bodyweight Squats', '15 reps', 'Beginner', 'Legs, Glutes', '🦵'),
  ex('2', 'Push Ups', '10 reps', 'Intermediate', 'Chest, Arms', '💪'),
  ex('3', 'Glute Bridge', '12 reps', 'Beginner', 'Glutes, Core', '🍑'),
  ex('4', 'Plank', '30 sec', 'Intermediate', 'Core', '🧘'),
  ex('5', 'Mountain Climbers', '40 sec', 'Advanced', 'Core, Cardio', '🏃'),
  ex('6', 'Dumbbell Rows', '12 reps', 'Intermediate', 'Back, Arms', '🏋️'),
];

export const todayWorkout = {
  title: '20 min Full Body Flow', duration: 20, difficulty: 'Beginner', calories: 180,
  muscles: 'Full body', exercises: allExercises.slice(0, 5),
  why: 'Based on your recent activity, available time and selected fitness goal, FitFlow recommends a short full-body session today.',
};

// Mock "AI": picks exercises with simple rules from the user's selections.
export function generatePlan({ goal, level, time, equipment, energy }) {
  const count = time <= 10 ? 3 : time <= 20 ? 4 : time <= 30 ? 5 : 6;
  let pool = allExercises.filter((e) => equipment === 'Dumbbells' || e.id !== '6');
  if (energy === 'Low') pool = pool.filter((e) => e.difficulty !== 'Advanced');
  return {
    title: `${time} min ${goal} Plan`, duration: time, difficulty: level,
    calories: Math.round(time * 9 * (energy === 'High' ? 1.2 : 1)), muscles: 'Full body',
    exercises: pool.slice(0, count),
    why: `You chose ${goal.toLowerCase()}, ${level.toLowerCase()} level, ${time} minutes, equipment: ${equipment.toLowerCase()} and ${energy.toLowerCase()} energy. FitFlow picked ${Math.min(count, pool.length)} exercises to match. (Simulated AI.)`,
  };
}
