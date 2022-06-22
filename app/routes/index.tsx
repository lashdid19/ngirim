import type { LinksFunction } from "@remix-run/node";
import { useRef } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import FileUploader from "~/components/FileUploader";
import MainTitle from "~/components/MainTitle";
import dropzoneStyles from 'react-dropzone-uploader/dist/styles.css'

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: dropzoneStyles }
  ];
};

export default function Index() {
  return (
    <section className="flex w-full h-full">
      <div className="flex flex-col mt-20 items-center w-full md:w-auto md:max-w-screen-md px-10 mx-auto space-y-5">
        <MainTitle />
        <div className="relative flex w-full bg-gray-700 rounded ">
          <input
            type="text"
            maxLength={6}
            className="w-full py-4 text-xl md:font-bold text-center text-white bg-gray-700 rounded outline-none"
            placeholder="Type 6-Digit Number"
          />
          <button className="absolute right-0 h-full p-3 text-white rounded-r hover:bg-gray-600">
            <AiOutlineDownload size={25} />
          </button>
        </div>
        <p className="text-xl font-light text-white">Or</p>
        {/* <input type="file"/>
        <Button
          text="Send File"
          onclick={() => fileInput.current?.click()}
        /> */}
        <FileUploader/>
      </div>
    </section>
  );
}
