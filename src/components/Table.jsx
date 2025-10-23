import React from "react";

export default function Table({ columns = [], data = [], renderRowActions }) {
  return (
    <div className="bg-white shadow rounded overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((c) => <th key={c.key} className="text-left px-4 py-2">{c.title}</th>)}
            {renderRowActions && <th className="px-4 py-2">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-t">
              {columns.map((c) => <td key={c.key} className="px-4 py-2">{row[c.key]}</td>)}
              {renderRowActions && <td className="px-4 py-2">{renderRowActions(row)}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
