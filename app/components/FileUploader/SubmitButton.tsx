import type { ISubmitButtonProps } from "react-dropzone-uploader";
import Button from "../Button";

export default function SubmitButton({
  disabled,
  content,
  onSubmit,
  files,
}: ISubmitButtonProps) {
  //set button to enabled if the file upload status is done
  const _disabled =
    files.some((f) =>
      ["preparing", "getting_upload_params", "uploading"].includes(
        f.meta.status
      )
    ) ||
    !files.some((f) => ["headers_received", "done"].includes(f.meta.status));

  //submit the uploaded file and leave the loading file
  const handleSubmit = () => {
    onSubmit(
      files.filter((f) => ["headers_received", "done"].includes(f.meta.status))
    );
  };

  return (
    <div className="w-full">
      <Button
        text={content}
        disabled={disabled || _disabled}
        onclick={handleSubmit}
      />
    </div>
  );
}
