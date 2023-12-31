
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { ICategory } from "@/lib/database/models/category.model";
import { startTransition, useState } from "react";
import { Input } from "../ui/input";



type DropdownProps = {
    value?: string,
    onChangeHandler?: () => void;
}

const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {

    const [categories, setCategories] = useState<ICategory[]>([])
    const [newCategory, setNewCategory] = useState('');

    const handleAddCategory=()=>{
        
    }
    return (
        <>
            <Select onValueChange={onChangeHandler} defaultValue={value}>
                <SelectTrigger className="select-field">
                    <SelectValue placeholder="CategoryId" />
                </SelectTrigger>
                <SelectContent>
                    {
                        categories.length > 0 && (categories.map((category) => (
                            <SelectItem className="select-item p-regular-14" value={category._id} key={category._id}>{category.name}</SelectItem>
                        )))
                    }
                    <AlertDialog>
                        <AlertDialogTrigger className="p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500">Open</AlertDialogTrigger>
                        <AlertDialogContent className="bg-white">
                            <AlertDialogHeader>
                                <AlertDialogTitle>New Category</AlertDialogTitle>
                                <AlertDialogDescription>
                                    <Input type="text" placeholder="Category Name" className="input-field pt-3" onChange={(e)=>setNewCategory(e.target.value)}/>
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onCliek={()=>startTransition(handleAddCategory)}>Add</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </SelectContent>
            </Select>


        </>

    )
}

export default Dropdown