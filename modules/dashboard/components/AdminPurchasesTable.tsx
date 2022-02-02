import React, { VoidFunctionComponent } from 'react';
import DeleteIcon from '../../../components/DeleteIcon';
import EditIcon from '../../../components/EditIcon';
import VisualizeIcon from '../../../components/VisualizeIcon';
import TableColumn from '../../../ui/atoms/TableColumn';
import TableHeaderItem from '../../../ui/atoms/TableHeaderItem';
import TableRow from '../../../ui/atoms/TableRow';
import StatusChip, { StatusTypes } from '../../../ui/molecules/StatusChip';
import Table from '../../../ui/molecules/Table';
import TableContent from '../../../ui/molecules/TableContent';
import TableHeader from '../../../ui/molecules/TableHeader';

type PurchaseItem = {
  productName: string;
  ownerName: string;
  productPrice: number;
  productStatus: StatusTypes;
};

const AdminPurchasesTable: VoidFunctionComponent = () => {
  const tableDataSource: PurchaseItem[] = [
    {
      productName: 'React Project',
      ownerName: 'Cristian Sotomayor',
      productPrice: 100,
      productStatus: 'Pending',
    },
    {
      productName: 'React Project',
      ownerName: 'Cristian Sotomayor',
      productPrice: 100,
      productStatus: 'Completed',
    },
    {
      productName: 'React Project',
      ownerName: 'Cristian Sotomayor',
      productPrice: 100,
      productStatus: 'Scheduled',
    },
    {
      productName: 'React Project',
      ownerName: 'Cristian Sotomayor',
      productPrice: 100,
      productStatus: 'Active',
    },
  ];

  return (
    <div className="w-full">
      <div className="bg-white shadow-md">
        <Table>
          <TableHeader>
            <TableHeaderItem className="text-left">Producto</TableHeaderItem>
            <TableHeaderItem className="text-center">Dueño</TableHeaderItem>
            <TableHeaderItem className="text-center">Precio</TableHeaderItem>
            <TableHeaderItem className="text-center">Estado</TableHeaderItem>
            <TableHeaderItem className="text-center">Acciones</TableHeaderItem>
          </TableHeader>
          <TableContent>
            {tableDataSource.map((project, idx) => (
              <TableRow className="hover:bg-gray-100" key={idx}>
                <TableColumn className="text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="font-medium">{project.productName}</span>
                  </div>
                </TableColumn>
                <TableColumn className="text-left">
                  <div className="flex items-center">
                    <div className="mr-2">
                      <img
                        className="w-6 h-6 rounded-full"
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                      />
                    </div>
                    <span>{project.ownerName}</span>
                  </div>
                </TableColumn>
                <TableColumn className="text-center">
                  <div>{project.productPrice}</div>
                </TableColumn>
                <TableColumn className="text-center">
                  <StatusChip status={project.productStatus} />
                </TableColumn>
                <TableColumn className="text-center">
                  <div className="flex item-center justify-center">
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <VisualizeIcon />
                    </div>
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <EditIcon />
                    </div>
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <DeleteIcon />
                    </div>
                  </div>
                </TableColumn>
              </TableRow>
            ))}
          </TableContent>
        </Table>
      </div>
    </div>
  );
};

export default AdminPurchasesTable;
