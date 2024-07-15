import { DeleteIcon } from "@/assets/icons/Icons";
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
} from "@/components/ui/alert-dialog";

const ConfirmDialog = ({
  handleDelete,
}: {
  handleDelete: (param1?:boolean) => void | undefined;
}): JSX.Element => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <DeleteIcon handleDelete={()=>handleDelete(false)} />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="title-color pb-3">Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription className="!text-[#c9c9c9]">
            This action cannot be undone. This will permanently delete this product.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="title-color" onClick={() => handleDelete(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className={"!bg-[red]"}
            onClick={() => handleDelete(true)}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmDialog;
