import type { IDropzoneProps, ILayoutProps } from "react-dropzone-uploader";
import Dropzone from "react-dropzone-uploader";
import { AiOutlinePlus } from "react-icons/ai";
import Preview from "./FileUploader/Preview";
import SubmitButton from "./FileUploader/SubmitButton";

export default function FileUploader() {
  const Layout = ({
    input,
    previews,
    submitButton,
    dropzoneProps,
    files,
    extra: { maxFiles },
  }: ILayoutProps) => {
    return (
      <div className="w-full">
        <div {...dropzoneProps}>{files.length < maxFiles && input}</div>
        {previews}

        {files.length > 0 && submitButton}
      </div>
    );
  };

  // add type defs to function props to get TS support inside function bodies,
  // and not just where functions are passed as props into Dropzone
  const getUploadParams: IDropzoneProps["getUploadParams"] = () => ({
    url: "https://httpbin.org/post",
  });

  const handleSubmit: IDropzoneProps["onSubmit"] = (files, allFiles) => {
    // console.log(files.map((f) => f.meta));
    alert("Sorry, this website is not finished yet :(")
    allFiles.forEach((f) => f.remove());
  };

  const InputContent = () => {
    return (
      <span className="flex text-green-500 justify-center space-x-6">
        <AiOutlinePlus size={25} />
        <p>Click / Drop to send files</p>
      </span>
    );
  };
  return (
    <Dropzone
      maxSizeBytes={100*1024**2}
      getUploadParams={getUploadParams}
      LayoutComponent={Layout}
      PreviewComponent={Preview}
      SubmitButtonComponent={SubmitButton}
      onSubmit={handleSubmit}
      inputContent={InputContent}
      inputWithFilesContent="Click / Drop to add more files"
      addClassNames={{
        dropzone: "!overflow-hidden !border-none hover:bg-gray-900",
        inputLabelWithFiles: "!flex !w-full !min-h-[120px] !m-0 !bg-transparent !space-x-3 !text-green-500 !text-lg"
      }}
    />
  );
}
