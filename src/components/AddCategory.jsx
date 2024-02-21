import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!inputValue.trim()) return;
        
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                placeholder="Add category"
                type="text"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};

// import { useState } from "react";

// export const AddCategory = ({ setCategories }) => {

//     const [inputValue, setInputValue] = useState('')

//     const onInputChange = ({ target }) => {
//         setInputValue(target.value)
//     }

//     const onSubmit = (event) => {
//         event.preventDefault()
//         if(inputValue .trim().length <= 1) return
//         setCategories(categories => [inputValue, ...categories])
//         setInputValue('')
//     }

//     return (
//         <form onSubmit={(event) => onSubmit(event)}>

//             <input
//                 placeholder="Add category"
//                 type="text"
//                 value={inputValue}
//                 onChange={onInputChange}
//             />
//         </form>
//     );
// };
