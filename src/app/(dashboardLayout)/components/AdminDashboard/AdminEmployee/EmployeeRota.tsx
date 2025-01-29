"use client";

import { useState } from "react";

type Employee = {
  id: number;
  name: string;
};

type Schedule = {
  [key: string]: string | null;
};

const employees: Employee[] = [
  { id: 1, name: "Luis Hawkins" },
  { id: 2, name: "Lois Carson" },
  { id: 3, name: "Verna Martin" },
  { id: 4, name: "Lucas Higgins" },
  { id: 5, name: "Jerome Elliott" },
  { id: 6, name: "Mario Watte" },
];

const days: string[] = [
  "Mon 5/5",
  "Tue 5/6",
  "Wed 5/7",
  "Thu 5/8",
  "Fri 5/9",
  "Sat 5/10",
  "Sun 5/11",
];

const EmployeeRota = () => {
  const [schedule, setSchedule] = useState<Schedule>({});

  const handleAssignShift = (employeeId: number, day: string) => {
    setSchedule((prev) => ({
      ...prev,
      [`${employeeId}-${day}`]: prev[`${employeeId}-${day}`] ? null : "✓",
    }));
  };

  return (
    <div className="p-4 w-full">
      <table className="w-full border border-gray-300 text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border border-gray-300">Employees</th>
            {days.map((day) => (
              <th key={day} className="p-2 border border-gray-300">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="border border-gray-300">
              <td className="p-2 border border-gray-300">{employee.name}</td>
              {days.map((day) => (
                <td
                  key={`${employee.id}-${day}`}
                  className="p-2 border border-gray-300 text-center cursor-pointer hover:bg-gray-200"
                  onClick={() => handleAssignShift(employee.id, day)}
                >
                  {schedule[`${employee.id}-${day}`] || ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeRota;
