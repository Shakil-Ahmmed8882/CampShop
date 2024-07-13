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
  handleDelete: (param1?:boolean) => void;
}): JSX.Element => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <DeleteIcon handleDelete={handleDelete} />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => handleDelete(false)}>
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
