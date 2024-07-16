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

type HandleDeleteFunction = (isConfirm: boolean) => void;

const ConfirmDialog = ({
  handleDelete,
}: {
  handleDelete: HandleDeleteFunction;
}): JSX.Element => {
  const handleCancel = () => {
    handleDelete(false);
  };

  const handleConfirm = () => {
    handleDelete(true);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <DeleteIcon handleDelete={handleCancel} />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="title-color pb-3">Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription className="!text-[#c9c9c9]">
            This action cannot be undone. This will permanently delete this product.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="title-color" onClick={handleCancel}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className={"!bg-[red]"}
            onClick={handleConfirm}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmDialog;