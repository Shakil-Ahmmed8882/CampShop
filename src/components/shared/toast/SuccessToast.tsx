// src/utils/toastUtils.ts
import { CheckCircle, Warning } from "@/assets/icons/CheckCircle";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";

export const ShowToast = (title: string, description: string,success?:boolean) => {
  toast(
    {
    title,
    description,
    action: (
      <>
      { 
      success?
      <CheckCircle/>
      :
      <Warning/>
      }
        <ToastAction altText=" undo cart" className="bg-[black] text-white">Undo</ToastAction>
      </>
    ),
  });
};
