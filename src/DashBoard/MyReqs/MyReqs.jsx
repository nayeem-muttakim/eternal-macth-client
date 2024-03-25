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
import { DeleteOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const MyReqs = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();
  const { data: MyReqs = [], refetch } = useQuery({
    queryKey: [user?.email, "MyReqs"],
    queryFn: async () => {
      const res = await axiosSecure(`/requests/mine?user=${user?.email}`);
      return res.data;
    },
  });
  //   console.log(MyReqs);
  const data = useMemo(() => MyReqs, []);

  /** @type import("@tanstack/react-table").ColumnDef<any>*/
  const columns = [
    { header: "Biodata Id" },
    {
      header: "Name",
    },
    {
      header: "Status",
    },
    {
      header: "Mobile no",
    },
    {
      header: "Email",
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
    axiosSecure.delete(`/requests/${fav._id}`).then((res) => {
      if (res.data.deletedCount) {
        toast.success("Request Removed");
        refetch();
      }
    });
  };

  return (
    <div className="w3-container">
      <Helmet>
        <title>Eternal Match | My Contact Requests</title>
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
            {MyReqs.map((fav) => (
              <>
                <Tr key={fav?._id}>
                  <Th>{fav?.bioId}</Th>
                  <Th>{fav?.name}</Th>
                  <Th>{!fav?.status ? "Pending" : "Approved"}</Th>

                  <th style={{ textAlign: "left" }}>
                    {!fav?.status ? "Pending" : fav?.invoice}
                  </th>
                  <th style={{ textAlign: "left" }}>
                    {!fav?.status ? "Pending" : fav?.email}
                  </th>
                  <Th>
                    <Popconfirm
                      icon={<QuestionCircleOutlined style={{ color: "red" }} />}
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

export default MyReqs;
