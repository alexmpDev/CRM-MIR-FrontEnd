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
    Button
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { del, listAll } from "@/slices/observations/thunks";

export function Observations() {
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(listAll(id));
    }, [])

    const handleDelete = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const deleteId = formData.get('id');
        const ok = confirm("Want to delete this observation")
        ok ? await dispatch(del(deleteId)) : ""
        dispatch(listAll(id));
    }

    const { role } = useSelector(state => state.auth);
    const { observations } = useSelector(state => state.observations)
    console.log(observations)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const currentDate = new Date();
    return (
        <div className="mt-12 mb-8 flex flex-col gap-12">
            <Card>
                <CardHeader variant="gradient" color="gray" className="mb-8 p-6 flex justify-between items-center">
                    <Typography variant="h6" color="white">
                        Observations Table
                    </Typography>
                    <Link to={"/students/observations/create/" + id}>
                        <Button>+</Button>
                    </Link>
                </CardHeader>
                <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                    <table className="w-full min-w-[640px] table-auto">
                        <thead>
                            <tr>
                                {["Observation"].map((el) => (
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
                            {observations.map(
                                ({ id, observation, }, key) => {
                                    const className = `py-3 px-5 ${key === observations.length - 1
                                        ? ""
                                        : "border-b border-blue-gray-50"
                                        }`;

                                    return (
                                        <tr key={observation}>
                                            <td className={className}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-semibold"
                                                >
                                                    {observation}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Typography
                                                    as="a"
                                                    href={"/students/observations/edit/" + id}
                                                    className="text-xs font-semibold text-blue-gray-600"
                                                >
                                                    Edit
                                                </Typography>
                                            </td>
                                            {role == 1 && (
                                                <td className={className}>

                                                    <Typography
                                                        as="a"
                                                        className="text-xs font-semibold text-blue-gray-600"
                                                    >
                                                        <form onSubmit={handleDelete}>
                                                            <button type="submit">
                                                                <input type="hidden" name="id" value={id} />
                                                                Delete
                                                            </button>
                                                        </form>
                                                    </Typography>
                                                </td>
                                            )}
                                        </tr>
                                    );
                                }
                            )}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
            <div className="mt-6 flex justify-center w-full">
                <Link to={"/students/show/" + id} ><Button>Return</Button></Link>
            </div>
        </div >
    );
}

export default Observations;
