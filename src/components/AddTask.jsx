// import { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { useDispatch } from "react-redux";
// import { addTask } from "../store/taskSlice";

// const AddTask = () => {
//     const dispatch = useDispatch();
//     const [formData, setFormData] = useState({
//         title: '',
//         description: '',
//         startDate: new Date(),
//         endDate: null,
//         status: 'Pending',
//         assignee: '',
//         priority: 'P0'
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleEndDateChange = (date) => {
//         setFormData({
//             ...formData,
//             endDate: date
//         });
//     };

//     const handleStartDateChange = (date) => {
//         if (date instanceof Date && !isNaN(date)) {
//             setFormData({
//                 ...formData,
//                 startDate: date
//             });
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const serializableFormData = {
//             ...formData,
//             startDate: formData.startDate.toISOString(),
//             endDate: formData.endDate ? formData.endDate.toISOString() : null
//         };
//         dispatch(addTask(serializableFormData));
//         setFormData({
//             title: '',
//             description: '',
//             startDate: new Date(),
//             endDate: null,
//             status: 'Pending',
//             assignee: '',
//             priority: 'P0'
//         });
//     };

//     return (
//         <div className="w-full max-w-6xl mx-auto px-6 py-10">
//             <h1 className="text-4xl font-extrabold text-center text-gray-800">Add New Task</h1>
//             <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                     {/* Title */}
//                     <div>
//                         <label htmlFor="title" className="block text-sm font-semibold text-gray-700">Title</label>
//                         <input
//                             type="text"
//                             id="title"
//                             name="title"
//                             placeholder="Task Title"
//                             value={formData.title}
//                             onChange={handleChange}
//                             className="mt-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
//                             required
//                         />
//                     </div>

//                     {/* Description */}
//                     <div>
//                         <label htmlFor="description" className="block text-sm font-semibold text-gray-700">Description</label>
//                         <textarea
//                             id="description"
//                             name="description"
//                             placeholder="Task Description"
//                             value={formData.description}
//                             onChange={handleChange}
//                             className="mt-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3 h-24"
//                             required
//                         ></textarea>
//                     </div>

//                     {/* Dates */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>
//                             <label htmlFor="startDate" className="block text-sm font-semibold text-gray-700">Start Date</label>
//                             <DatePicker
//                                 selected={formData.startDate}
//                                 onChange={handleStartDateChange}
//                                 dateFormat="dd/MM/yyyy"
//                                 className="mt-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="endDate" className="block text-sm font-semibold text-gray-700">End Date</label>
//                             <DatePicker
//                                 selected={formData.endDate}
//                                 onChange={handleEndDateChange}
//                                 dateFormat="dd/MM/yyyy"
//                                 className="mt-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
//                             />
//                         </div>
//                     </div>

//                     {/* Status and Priority */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>
//                             <label htmlFor="status" className="block text-sm font-semibold text-gray-700">Status</label>
//                             <select
//                                 id="status"
//                                 name="status"
//                                 value={formData.status}
//                                 onChange={handleChange}
//                                 className="mt-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
//                             >
//                                 <option value="Pending">Pending</option>
//                                 <option value="In Progress">In Progress</option>
//                                 <option value="Completed">Completed</option>
//                                 <option value="Deployed">Deployed</option>
//                                 <option value="Deferred">Deferred</option>
//                             </select>
//                         </div>
//                         <div>
//                             <label htmlFor="priority" className="block text-sm font-semibold text-gray-700">Priority</label>
//                             <select
//                                 id="priority"
//                                 name="priority"
//                                 value={formData.priority}
//                                 onChange={handleChange}
//                                 className="mt-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
//                             >
//                                 <option value="P0">P0</option>
//                                 <option value="P1">P1</option>
//                                 <option value="P2">P2</option>
//                             </select>
//                         </div>
//                     </div>

//                     {/* Submit Button */}
//                     <button
//                         type="submit"
//                         className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                     >
//                         Add Task
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddTask;




import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTask = ({ onAddTask }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        startDate: new Date(),
        endDate: null,
        status: "Pending",
        priority: "P0",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleEndDateChange = (date) => {
        setFormData({
            ...formData,
            endDate: date,
        });
    };

    const handleStartDateChange = (date) => {
        setFormData({
            ...formData,
            startDate: date,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            ...formData,
            startDate: formData.startDate.toISOString(),
            endDate: formData.endDate ? formData.endDate.toISOString() : null,
        };
        onAddTask(newTask);
        setFormData({
            title: "",
            description: "",
            startDate: new Date(),
            endDate: null,
            status: "Pending",
            priority: "P0",
        });
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-6 py-10">
            <h1 className="text-4xl font-extrabold text-center text-gray-800">Add New Task</h1>
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-sm font-semibold text-gray-700">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Task Title"
                            value={formData.title}
                            onChange={handleChange}
                            className="mt-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-semibold text-gray-700">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Task Description"
                            value={formData.description}
                            onChange={handleChange}
                            className="mt-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3 h-24"
                            required
                        ></textarea>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="startDate" className="block text-sm font-semibold text-gray-700">
                                Start Date
                            </label>
                            <DatePicker
                                selected={formData.startDate}
                                onChange={handleStartDateChange}
                                dateFormat="dd/MM/yyyy"
                                className="mt-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
                            />
                        </div>
                        <div>
                            <label htmlFor="endDate" className="block text-sm font-semibold text-gray-700">
                                End Date
                            </label>
                            <DatePicker
                                selected={formData.endDate}
                                onChange={handleEndDateChange}
                                dateFormat="dd/MM/yyyy"
                                className="mt-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTask;
