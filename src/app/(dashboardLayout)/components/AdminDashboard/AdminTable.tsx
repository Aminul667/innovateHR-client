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
    status: "Accepted",
  },
  {
    id: 2,
    name: "Bob Smith",
    avatar:
      "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    role: "User",
    status: "Pending",
  },
  {
    id: 3,
    name: "Charlie Brown",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "IT Developer",
    status: "Accepted",
  },
  {
    id: 4,
    name: "Diana Prince",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29uJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    role: "Backend Developer",
    status: "Accepted",
  },
  {
    id: 5,
    name: "Ethan Hunt",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Product Manager",
    status: "Pending",
  },
];

const AdminTable = () => {
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
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Avatar</TableHead>
          <TableHead
            className="cursor-pointer"
            onClick={() => toggleSort("name")}
          >
            Name{" "}
            {sortColumn === "name" && (sortDirection === "asc" ? "▲" : "▼")}
          </TableHead>
          <TableHead
            className="cursor-pointer"
            onClick={() => toggleSort("role")}
          >
            Role{" "}
            {sortColumn === "role" && (sortDirection === "asc" ? "▲" : "▼")}
          </TableHead>
          <TableHead
            className="cursor-pointer"
            onClick={() => toggleSort("status")}
          >
            Status{" "}
            {sortColumn === "status" && (sortDirection === "asc" ? "▲" : "▼")}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedUsers.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <Avatar>
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>
              <Badge
                variant={
                  user.status === "Accepted" ? "secondary" : "destructive"
                }
              >
                {user.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AdminTable;
