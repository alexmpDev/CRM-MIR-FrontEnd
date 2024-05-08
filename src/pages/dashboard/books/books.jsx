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
import { listAll, del } from "@/slices/books/thunks";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export function Books() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listAll());
    }, [])

    const handleFilter = async (data) => {
        console.log(data)
        await dispatch(listAll(data.title, data.author, data.gender));
    };

    const handleDelete = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const id = formData.get('id');
        const ok = confirm("Want to delete this student")
        ok ? await dispatch(del(id)) : ""
        dispatch(listAll());
    }

    const { books } = useSelector(state => state.books)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const currentDate = new Date();
    return (
        <div className="mt-12 mb-8 flex flex-col gap-12">
            <Card>
                <CardHeader variant="gradient" color="gray" className="mb-8 p-6 flex justify-between items-center">
                    <Typography variant="h6" color="white">
                        Books Table
                    </Typography>
                    <div >
                        <form onSubmit={handleSubmit(handleFilter)} class="flex gap-4">
                            <input type="text" placeholder="title" class="border border-black p-1 flex-1 text-black" {...register("title", { required: false })} />
                            <input type="text" placeholder="author" class="border border-black p-1 flex-1 text-black" {...register("author", { required: false })} />
                            <input type="text" placeholder="gender" class="border border-black p-1 flex-1 text-black" {...register("gender", { required: false })} />
                            <button type="submit" class=" p-1 bg-gray-900 hover:bg-gray-800">FILTER</button>
                        </form>
                    </div>
                    <Link to="/books">
                        <Button>+</Button>
                    </Link>
                </CardHeader>
                <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                    <table className="w-full min-w-[640px] table-auto">
                        <thead>
                            <tr>
                                {["title", "author", "isbn", "gender"].map((el) => (
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
                            {books.map(
                                ({ id, title, author, isbn, gender }, key) => {
                                    const className = `py-3 px-5 ${key === books.length - 1
                                        ? ""
                                        : "border-b border-blue-gray-50"
                                        }`;

                                    return (
                                        <tr key={title}>
                                            <td className={className}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-semibold"
                                                >
                                                    {title}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {author}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {isbn}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {gender}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Typography
                                                    as="a"
                                                    href={"/books/" + id}
                                                    className="text-xs font-semibold text-blue-gray-600"
                                                >
                                                    Edit
                                                </Typography>
                                            </td>
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
                                        </tr>
                                    );
                                }
                            )}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        </div >
    );
}

export default Books;
