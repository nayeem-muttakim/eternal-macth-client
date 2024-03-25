import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useMemo } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const FavBio = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();
  const { data: myFav = [], refetch } = useQuery({
    queryKey: [user?.email, "myFav"],
    queryFn: async () => {
      const res = await axiosSecure(`/favourites/mine?user=${user?.email}`);
      return res.data;
    },
  });
  const data = useMemo(() => myFav, []);

  /** @type import("@tanstack/react-table").ColumnDef<any>*/
  const columns = [
    { header: "Biodata Id" },
    {
      header: "Name",
    },
    {
      header: "Permanent Division",
    },
    {
      header: "Occupation",
    },

    {
      header: "Delete",
    },
  ];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleDelete = (fav) => {
    axiosSecure.delete(`/favourites/${fav._id}`).then((res) => {
      if (res.data.deletedCount) {
        toast.success("Biodata Removed");
        refetch();
      }
    });
  };

  return (
    <div className="w3-container">
        <Helmet>
        <title>Eternal Match | Favourites</title>
      </Helmet>
      <TableContainer className="w3-responsive">
        <Table className="w3-table-all">
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {myFav.map((fav) => (
              <>
                <Tr key={fav?._id}>
                  <Th>{fav?.bioId}</Th>
                  <Th>{fav?.name}</Th>
                  <Th>{fav?.permanent_division}</Th>

                  <Th>{fav?.occupation}</Th>
                  <Th>
                    <Popconfirm
                      title="Sure to delete?"
                      onConfirm={() => handleDelete(fav)}
                    >
                      <Button danger>
                        <DeleteOutlined fontSize="large" />
                      </Button>
                    </Popconfirm>
                  </Th>
                </Tr>
              </>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FavBio;
