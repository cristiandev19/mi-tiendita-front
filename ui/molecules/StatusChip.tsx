import React, { FunctionComponent } from 'react';
import Chip from '../atoms/Chip';

type StatusChipProps = {
  status: StatusTypes;
};

export type StatusTypes = 'Active' | 'Completed' | 'Scheduled' | 'Pending';

const StatusChip: FunctionComponent<StatusChipProps> = ({ status }) => {
  return (
    <>
      {
        {
          Active: <Chip className="bg-purple-200 text-purple-600">Activo</Chip>,
          Completed: (
            <Chip className="bg-green-200 text-green-600">Completado</Chip>
          ),
          Scheduled: (
            <Chip className="bg-yellow-200 text-yellow-600">Agendado</Chip>
          ),
          Pending: <Chip className="bg-red-200 text-red-600">Pendiente</Chip>,
        }[status]
      }
    </>
  );
};

export default StatusChip;
