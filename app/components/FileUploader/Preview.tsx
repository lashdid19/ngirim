import type { IPreviewProps } from "react-dropzone-uploader";
import { formatBytes, formatDuration } from "react-dropzone-uploader";
import {
  AiOutlineClose,
  AiOutlinePause,
  AiOutlineReload,
} from "react-icons/ai";

export default function Preview({
  className,
  imageClassName,
  style,
  imageStyle,
  fileWithMeta: { cancel, remove, restart },
  meta: {
    name = "",
    percent = 0,
    size = 0,
    previewUrl,
    status,
    duration,
    validationError,
  },
  isUpload,
  canCancel,
  canRemove,
  canRestart,
  extra: { minSizeBytes },
}: IPreviewProps) {
  let title = `${name || "?"}, ${formatBytes(size)}`;
  if (duration) title = `${title}, ${formatDuration(duration)}`;

  if (status === "error_file_size" || status === "error_validation") {
    return (
      <div className="flex w-full space-x-5 items-center my-4 justify-between">
        <small className="text-white">{title}</small>
        <div className="flex space-x-3">
          {status === "error_file_size" && (
            <small className="text-red-500">
              {size < minSizeBytes ? "File too small" : "File too big"}
            </small>
          )}
          {status === "error_validation" && (
            <small className="text-red-500">{String(validationError)}</small>
          )}
          {canRemove && (
            <span className="text-white" onClick={remove}>
              <AiOutlineClose />
            </span>
          )}
        </div>
      </div>
    );
  }

  if (
    status === "error_upload_params" ||
    status === "exception_upload" ||
    status === "error_upload"
  ) {
    title = `${title} (upload failed)`;
  }
  if (status === "aborted") title = `${title} (cancelled)`;

  return (
    <div className="flex space-x-3 items-center my-4">
      {previewUrl && (
        <div className="flex w-full space-x-5 items-center">
          <img
            className="w-14 h-14 object-cover"
            src={previewUrl}
            alt={title}
            title={title}
          />
          <small className="w-2/3 text-white">{title}</small>
        </div>
      )}
      {!previewUrl && <small className="w-2/3 text-white">{title}</small>}

      <div className="w-1/3 flex space-x-3 items-center">
        {isUpload && (
          <>
            <small className="text-green-500">{Math.round(percent)}%</small>
            <div className="hidden md:block w-full bg-gray-200 h-3 space-x-2">
              <div
                className="bg-green-500 h-full"
                style={{
                  width:
                    status === "done" || status === "headers_received"
                      ? "100%"
                      : percent + "%",
                }}
              ></div>
            </div>
          </>
          // <progress
          //   className="bg-transparent text-green-500"
          //   max={100}
          //   value=
          // />
        )}

        {status === "uploading" && canCancel && (
          <span className="text-white" onClick={cancel}>
            <AiOutlinePause />
          </span>
        )}
        {status !== "preparing" &&
          status !== "getting_upload_params" &&
          status !== "uploading" &&
          canRemove && (
            <span className="text-white" onClick={remove}>
              <AiOutlineClose />
            </span>
          )}
        {[
          "error_upload_params",
          "exception_upload",
          "error_upload",
          "aborted",
          "ready",
        ].includes(status) &&
          canRestart && (
            <span className="text-white" onClick={restart}>
              <AiOutlineReload />
            </span>
          )}
      </div>
    </div>
  );
}
