
interface Props {
    filter: string;
    onHandleChange: (e: React.FormEvent) => void;
}

const TodoFilter = ({ filter, onHandleChange }: Props) => {
    return (
        <>
            <input
                type="text"
                placeholder="Search.."
                value={filter}
                onChange={onHandleChange}
                className="todo-filter "
            />
        </>
    )
}
export default TodoFilter