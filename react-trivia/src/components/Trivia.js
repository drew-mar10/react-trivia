import { useEffect, useState } from 'react';
import axios from 'axios';

const Trivia = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get("https://opentdb.com/api_category.php")
            .then((res) => setCategories(res.data.trivia_categories));
    }, []);

    return (
        <ul>
            {categories.map((category) => (
                <li key={category.id}>
                    <button><a href={`https://opentdb.com/api_count.php?category=${category.id}`}>
                        {category.name}
                    </a></button>
                </li>
            ))}
        </ul>
    );
};

export { Trivia }