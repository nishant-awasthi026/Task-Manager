import TaskCard from "./TaskCard";
import { useSelector } from "react-redux";
import { selectAllTasks } from "../store/taskSlice";
import { Link } from "react-router-dom";

const Deferred = () => {
    const tasks = useSelector(selectAllTasks);
    const deferredTasks = tasks.filter((task) => task.status === "Deferred");

    return (
        <div className="w-[90%] lg:w-[70%] mx-auto py-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
                Deferred Tasks
            </h1>
            {deferredTasks.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5 overflow-y-auto h-[50vh] sm:h-[70vh]">
                    {deferredTasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            title={task.title}
                            description={task.description}
                            startDate={task.startDate}
                            endDate={task.endDate}
                            status={task.status}
                            assignee={task.assignee}
                            priority={task.priority}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center mt-[20vh]">
                    <p className="text-lg text-gray-600">
                        No tasks found.{" "}
                        <Link to="/addTask" className="text-indigo-500 hover:underline">
                            Add a new task
                        </Link>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Deferred;