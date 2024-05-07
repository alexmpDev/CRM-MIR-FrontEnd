import { React, useEffect } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
    Tooltip,
    Progress,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import { useSelector, useDispatch } from 'react-redux';
import { listAll } from "@/slices/students/thunks";
import { Link } from "react-router-dom";

export function Students() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listAll());
    }, [])

    const { students } = useSelector(state => state.students)
    const currentDate = new Date();
    return (
        <div className="mt-12 mb-8 flex flex-col gap-12">
            <Card>
                <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
                    <Typography variant="h6" color="white">
                        Students Table
                    </Typography>
                </CardHeader>
                <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                    <table className="w-full min-w-[640px] table-auto">
                        <thead>
                            <tr>
                                {["nom", "cognom1", "cognom2", "+18", "clase", "Pati"].map((el) => (
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
                            {students.map(
                                ({ id, photo, name, surname1, surname2, birthDate, curs, leave }, key) => {
                                    const className = `py-3 px-5 ${key === students.length - 1
                                        ? ""
                                        : "border-b border-blue-gray-50"
                                        }`;

                                    return (
                                        <tr key={name}>
                                            <td className={className}>
                                                <div className="flex items-center gap-4">
                                                    <Avatar src={"http://localhost:8000/storage/"+ photo} alt={name} size="sm" variant="rounded" />
                                                    <div>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-semibold"
                                                        >
                                                            {name}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {surname1}
                                                </Typography>

                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {surname2}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {((currentDate.getFullYear() - new Date(birthDate).getFullYear()) >= 18) ? (
                                                        <span role="img" aria-label="Tick">✔️</span>
                                                    ) : (
                                                        <span role="img" aria-label="Cross">❌</span>
                                                    )}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {curs}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {((currentDate.getFullYear() - new Date(birthDate).getFullYear()) >= 18 || leave) ? (
                                                        <span role="img" aria-label="Tick">✔️</span>
                                                    ) : (
                                                        <span role="img" aria-label="Cross">❌</span>
                                                    )}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                    <Typography
                                                        as="a"
                                                        href={"/students/" + id}
                                                        className="text-xs font-semibold text-blue-gray-600"
                                                    >
                                                        Edit
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
        </div>
    );
}

export default Students;
