"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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
const users = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar:
      "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
    role: "Admin",
    status: "9:00AM - 5:00PM",
  },
  {
    id: 2,
    name: "Bob Smith",
    avatar:
      "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    role: "Data Scientist",
    status: "11:00AM - 7:00PM",
  },
  {
    id: 3,
    name: "Charlie Brown",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "IT Developer",
    status: "9:00AM - 5:00PM",
  },
  {
    id: 4,
    name: "Diana Prince",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29uJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    role: "Backend Developer",
    status: "9:00AM - 5:00PM",
  },
  {
    id: 5,
    name: "Ethan Hunt",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Product Manager",
    status: "9:00AM - 5:00PM",
  },
];

const AdminOnShift = () => {
  const [sortColumn, setSortColumn] = useState<"name" | "role" | "status">(
    "name"
  );
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const sortedUsers = [...users].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const toggleSort = (column: "name" | "role" | "status") => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  return (
    <Table>
      {/* header */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Employee</TableHead>
          <TableHead
            className="cursor-pointer"
            onClick={() => toggleSort("role")}
          >
            Title{" "}
            {sortColumn === "role" && (sortDirection === "asc" ? "▲" : "▼")}
          </TableHead>
          <TableHead
            className="cursor-pointer"
            onClick={() => toggleSort("status")}
          >
            On Shift{" "}
            {sortColumn === "status" && (sortDirection === "asc" ? "▲" : "▼")}
          </TableHead>
        </TableRow>
      </TableHeader>

      {/* body */}
      <TableBody>
        {sortedUsers.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <div className="flex items-center justify-center gap-5 mr-5">
                <Avatar>
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{user.name}</h3>
                  <p>user.email@mail.com</p>
                </div>
              </div>
            </TableCell>
            {/* <TableCell className="font-medium">{user.name}</TableCell> */}
            <TableCell>{user.role}</TableCell>
            <TableCell>
              <Badge>{user.status}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AdminOnShift;
