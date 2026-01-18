import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, BookOpen, Calculator, GraduationCap, Coffee, AlertCircle } from 'lucide-react';

// Define the shape of a Task for TypeScript
interface Task {
  time: string;
  duration: string;
  title: string;
  type: string;
  desc: string;
}

// Define the shape of a Schedule Day
interface ScheduleDay {
  day: string;
  goal: string;
  tasks: Task[];
}

const App = () => {
  // FIX 1: Tell React this state uses string keys (e.g. "0-1") and boolean values
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});

  // FIX 2: Add 'number' types to the arguments
  const toggleTask = (day: number, time: number) => {
    const key = `${day}-${time}`;
    setCompletedTasks(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const schedule: ScheduleDay[] = [
    {
      day: "Monday (OFF - Heavy Lifting)",
      goal: "Master Tuesday's midterms + High-Volume AMC 8 Math.",
      tasks: [
        { time: "8:00 AM", duration: "75m", title: "AMC 8: Full Practice", type: "amc", desc: "40 min test + 35 min review. Analyze every mistake." },
        { time: "9:30 AM", duration: "90m", title: "Midterm: Subject 1", type: "midterm", desc: "60 min concepts / 30 min practice problems." },
        { time: "11:20 AM", duration: "60m", title: "HS: Reading Comp", type: "hs", desc: "3 difficult passages. Focus on evidence-based answers." },
        { time: "1:20 PM", duration: "90m", title: "Midterm: Subject 2", type: "midterm", desc: "90-minute deep work block." },
        { time: "3:10 PM", duration: "60m", title: "AMC 8: Speed Drill", type: "amc", desc: "Q1-15 in 20 mins. Aim for 100% accuracy." },
        { time: "4:10 PM", duration: "60m", title: "HS: Grammar/Vocab", type: "hs", desc: "Intensive drills on high-frequency topics." }
      ]
    },
    {
      day: "Tuesday (Midterms Day 1)",
      goal: "Execute Midterms + Prepare for Wednesday.",
      tasks: [
        { time: "2:00 PM", duration: "90m", title: "Midterm: Wed Subj 1", type: "midterm", desc: "90-minute focus block." },
        { time: "3:45 PM", duration: "90m", title: "Midterm: Wed Subj 2", type: "midterm", desc: "90-minute focus block." },
        { time: "6:15 PM", duration: "60m", title: "AMC 8: Hardest 5", type: "amc", desc: "Solve Q21-25 from 3 past papers. Focus on logic." },
        { time: "7:30 PM", duration: "60m", title: "HS: Mixed Practice", type: "hs", desc: "30m Vocab / 30m Grammar." }
      ]
    },
    {
      day: "Wednesday (Midterms Day 2)",
      goal: "Execute Midterms + Prepare for Thursday.",
      tasks: [
        { time: "2:00 PM", duration: "90m", title: "Midterm: Thu Subj 1", type: "midterm", desc: "Focus on weakest units for Thursday." },
        { time: "3:45 PM", duration: "90m", title: "Midterm: Thu Subj 2", type: "midterm", desc: "Final midterm deep-dive." },
        { time: "6:15 PM", duration: "60m", title: "AMC 8: Mistake Audit", type: "amc", desc: "Create 5 problems based on past 'silly' errors." },
        { time: "7:30 PM", duration: "60m", title: "HS: Speed Run", type: "hs", desc: "Read 2 passages faster than comfortable." }
      ]
    },
    {
      day: "Thursday (Midterms Done!)",
      goal: "Pivot focus to HS Admissions (Sat) and AMC 8.",
      tasks: [
        { time: "1:30 PM", duration: "90m", title: "HS: Simulated Section", type: "hs", desc: "Continuous practice to build mental fatigue stamina." },
        { time: "3:30 PM", duration: "90m", title: "AMC 8: Full Mock", type: "amc", desc: "Timed 2022/2023 paper + 30m analysis." },
        { time: "6:00 PM", duration: "60m", title: "HS: Vocab Cram", type: "hs", desc: "Review high-frequency word lists." },
        { time: "7:00 PM", duration: "60m", title: "AMC 8: Geometry Special", type: "amc", desc: "10 Geometry problems. Watch for volume/area traps." }
      ]
    },
    {
      day: "Friday (Pre-Game Day)",
      goal: "Light & Confident. No burnout.",
      tasks: [
        { time: "8:30 AM", duration: "120m", title: "HS: Final Tune-Up", type: "hs", desc: "Review rules/strategies. Build confidence." },
        { time: "10:45 AM", duration: "90m", title: "AMC 8: Counting/Prob", type: "amc", desc: "10-15 moderate difficulty problems." },
        { time: "1:15 PM", duration: "90m", title: "AMC 8: Visualization", type: "amc", desc: "Redo a successful test. Aim for 25/25." },
        { time: "2:45 PM", duration: "60m", title: "HS: Vocab Review", type: "hs", desc: "Final list sweep. Relax afterward." }
      ]
    }
  ];

  // FIX 3: Add 'string' type to the argument
  const getTypeStyle = (type: string) => {
    switch (type) {
      case 'amc': return 'bg-emerald-50 border-emerald-200 text-emerald-700';
      case 'midterm': return 'bg-blue-50 border-blue-200 text-blue-700';
      case 'hs': return 'bg-purple-50 border-purple-200 text-purple-700';
      default: return 'bg-slate-50 border-slate-200 text-slate-700';
    }
  };

  // FIX 4: Add 'string' type to the argument
  const getIcon = (type: string) => {
    switch (type) {
      case 'amc': return <Calculator className="w-4 h-4" />;
      case 'midterm': return <BookOpen className="w-4 h-4" />;
      case 'hs': return <GraduationCap className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Study Strategy Dashboard</h1>
              <p className="text-slate-500 mt-1">Targeting Midterm Excellence & AMC 8 Perfect Score (25/25)</p>
            </div>
            <div className="flex gap-3">
              <div className="flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
                <Calculator className="w-3 h-3" /> AMC 8
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                <BookOpen className="w-3 h-3" /> Midterms
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                <GraduationCap className="w-3 h-3" /> HS Adm
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-xl border border-amber-100">
              <Coffee className="w-5 h-5 text-amber-600 mt-0.5" />
              <div>
                <p className="font-bold text-amber-900 text-sm">The 10-Minute Reset</p>
                <p className="text-amber-800 text-xs">Eyes off screens. Look far away. Hydrate. No social media scrolling.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-rose-50 rounded-xl border border-rose-100">
              <AlertCircle className="w-5 h-5 text-rose-600 mt-0.5" />
              <div>
                <p className="font-bold text-rose-900 text-sm">Mistake Prevention</p>
                <p className="text-rose-800 text-xs">Use the 25-Box Scratch Grid. Re-read the LAST sentence before bubbling.</p>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {schedule.map((day, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <div className="bg-slate-900 text-white p-4 rounded-xl shadow-md">
                <h2 className="font-bold text-sm uppercase tracking-wider">{day.day.split('(')[0]}</h2>
                <p className="text-[10px] text-slate-400 mt-1 leading-tight">{day.goal}</p>
              </div>

              <div className="space-y-3">
                {day.tasks.map((task, tidx) => {
                  const isDone = completedTasks[`${idx}-${tidx}`];
                  return (
                    <div 
                      key={tidx}
                      onClick={() => toggleTask(idx, tidx)}
                      className={`group relative p-3 rounded-xl border-2 transition-all cursor-pointer hover:shadow-md ${
                        isDone ? 'bg-slate-100 border-slate-200 grayscale opacity-60' : getTypeStyle(task.type)
                      }`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-[10px] font-bold opacity-70 flex items-center gap-1">
                          {getIcon(task.type)} {task.time}
                        </span>
                        <span className="text-[10px] font-mono opacity-50 bg-black/5 px-1 rounded">{task.duration}</span>
                      </div>
                      <h3 className="font-bold text-xs mb-1 line-clamp-1">{task.title}</h3>
                      <p className="text-[10px] leading-relaxed opacity-80">{task.desc}</p>
                      
                      {isDone && (
                        <div className="absolute top-2 right-2">
                          <CheckCircle2 className="w-4 h-4 text-slate-400" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-12 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-emerald-600" />
            AMC 8: Perfect Score Checklist
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <p className="font-bold text-sm text-slate-700">Scratch Paper Strategy</p>
              <p className="text-xs text-slate-500">Divide your paper into a 5x5 grid. Do work for Question N in Box N. Clean work prevents dumb arithmetic errors.</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-sm text-slate-700">The "Final Read" Rule</p>
              <p className="text-xs text-slate-500">Before selecting your answer, read the last sentence of the prompt one more time. Did they ask for area? Perimeter? $x$ or $y$?</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-sm text-slate-700">Logical Sanity Check</p>
              <p className="text-xs text-slate-500">Is your answer realistic? If a runner's speed is 200 mph, something went wrong in your algebra. Pivot and re-check.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
