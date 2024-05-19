import { React, useEffect } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from 'react-redux';
import { listAll } from "@/slices/wc/thunks";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export function WcList() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listAll());
    }, [dispatch]);

    const { wc } = useSelector(state => state.wc);
    const currentDate = new Date();

    const validWcEntries = wc.filter(entry => new Date(entry.valid_until) > currentDate);

    return (
        <div className="mt-12 mb-8 flex flex-col gap-12">
            <Card>
                <CardHeader variant="gradient" color="gray" className="mb-8 p-6 flex justify-between items-center">
                    <Typography variant="h6" color="white">
                        WC Table
                    </Typography>
                </CardHeader>
                <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                    <table className="w-full min-w-[640px] table-auto">
                        <thead>
                            <tr>
                                {["Student_id","Name", "Teacher"].map((el) => (
                                    <th
                                        key={el}
                                        className="border-b border-blue-gray-50 py-3 px-5 text-left"
                                    >
                                        <Typography
                                            variant="small"
                                            className="text-[11px] font-bold uppercase text-blue-gray-400"
                                        >
                                            {el}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {validWcEntries.map(
                                ({ id, student_id, teacher, valid_until, student }, key) => {
                                    const className = `py-3 px-5 ${key === validWcEntries.length - 1
                                        ? ""
                                        : "border-b border-blue-gray-50"
                                        }`;

                                    return (
                                        <tr key={id}>
                                            <td className={className}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-semibold"
                                                >
                                                    {student_id}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {student.name}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {teacher}
                                                </Typography>
                                            </td>
                                        </tr>
                                    );
                                }
                            )}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
            <div className="mt-6 flex justify-center w-full">
                <Link to="/dashboard/wcIndex"><Button>Return</Button></Link>
            </div>
        </div>

    );
}

export default WcList;
