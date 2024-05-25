import React from 'react';

export default function Tables(props: {
  data: any[];
}) {
  const { data } = props;

  return (
    <div className="mt-4">
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val: any, i: number) => (
            <tr key={i}>
              <td>{val.Name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
