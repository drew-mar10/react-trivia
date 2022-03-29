import { useEffect, useState } from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';

const Trivia = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get("https://opentdb.com/api_category.php")
            .then((res) => setCategories(res.data.trivia_categories));
    }, []);

// useEffect(() => {
//     axios
//         .get(`https://opentdb.com/api.php?amount=10`)
//         .then(res => {
//             const categories = res.data.trivia_categories.map(obj => obj.data);

//         setCategories(categories);
//         });
// }, []);

    return (
        <ul>
            {categories.map((category) => (
                <li key={category.id}>
                    <button><a href={`https://opentdb.com/api.php?amount=10${category.id}`}>
                        {category.name}
                    </a></button>
                </li>
            ))}
        </ul>
    );
};

export { Trivia }

