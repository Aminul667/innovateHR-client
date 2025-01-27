"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

// dummy user data
const data = [
  { id: 1, date: "2025-01-01", title: "New Year's Celebration" },
  { id: 2, date: "2025-02-14", title: "Valentine's Day Event" },
  { id: 3, date: "2025-03-17", title: "St. Patrick's Day Parade" },
  { id: 4, date: "2025-07-04", title: "Independence Day Fireworks" },
  { id: 5, date: "2025-12-25", title: "Christmas Party" },
];

const AdminTable = () => {
  const [sortColumn, setSortColumn] = useState<"date" | "title">("date");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const sortedData = [...data].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const toggleSort = (column: "date" | "title") => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead
            className="cursor-pointer"
            onClick={() => toggleSort("date")}
          >
            Date{" "}
            {sortColumn === "date" && (sortDirection === "asc" ? "▲" : "▼")}
          </TableHead>
          <TableHead
            className="cursor-pointer"
            onClick={() => toggleSort("title")}
          >
            Title{" "}
            {sortColumn === "title" && (sortDirection === "asc" ? "▲" : "▼")}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedData.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.date}</TableCell>
            <TableCell className="font-medium">{item.title}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AdminTable;
