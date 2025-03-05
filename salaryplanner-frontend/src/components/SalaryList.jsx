import { useEffect, useState } from "react";
import { getSalaries, addSalary } from "../api/salaryApi";

const SalaryList = () => {
    const [salaries, setSalaries] = useState([]);
    const [newSalary, setNewSalary] = useState({ base_salary: "", bonus: "", deductions: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchSalaries();
    }, []);

    const fetchSalaries = async () => {
        try {
            setLoading(true);
            const data = await getSalaries();
            setSalaries(data);
        } catch (err) {
            setError("Failed to fetch salaries. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewSalary((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            await addSalary(newSalary);
            setNewSalary({ base_salary: "", bonus: "", deductions: "" }); // Reset input fields
            fetchSalaries();
        } catch (err) {
            setError("Failed to add salary. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Salary List</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {loading && <p>Loading...</p>}

            <ul>
                {salaries.map((salary) => (
                    <li key={salary.id}>
                        Base: {salary.base_salary}, Bonus: {salary.bonus}, Deductions: {salary.deductions}
                    </li>
                ))}
            </ul>

            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="base_salary"
                    placeholder="Base Salary"
                    value={newSalary.base_salary}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="bonus"
                    placeholder="Bonus"
                    value={newSalary.bonus}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="deductions"
                    placeholder="Deductions"
                    value={newSalary.deductions}
                    onChange={handleChange}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? "Adding..." : "Add Salary"}
                </button>
            </form>
        </div>
    );
};

export default SalaryList;
