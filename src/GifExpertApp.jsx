import { useState } from "react";
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Bojack']);
    
    console.log(categories);

    const onAddCategory = ( event ) => {
        // !!Opcionbrandon
        // const noRepeat = categories.find(category => category == event);
        // if(!noRepeat){
        //     setCategories([...categories, event])
        // }else{
            //     alert('La categoria ya existe.')
            // }
            
            // !!Opcion Devtalles
            
            if(categories.includes(event)) return
                setCategories([...categories, event])
    }

    return (
        <div>
            <h1>Gif Expert App</h1>

            <AddCategory 
            onNewCategory={event =>onAddCategory(event) }
            />

            {
                categories.map((category, id) => (
                    <GifGrid key={id} category={category}/>
                ))
            }
        </div>
    );
};
