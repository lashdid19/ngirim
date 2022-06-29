import type { LinksFunction } from "@remix-run/node";
import { AiOutlineDownload } from "react-icons/ai";
import FileUploader from "~/components/FileUploader";
import MainTitle from "~/components/MainTitle";
import dropzoneStyles from "react-dropzone-uploader/dist/styles.css";
import { getKeyWithFiles } from "~/utils/getKeyWithFiles"
import { useLoaderData } from "@remix-run/react";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: dropzoneStyles }];
};

export async function loader() {
  // const apiKey = process.env.SA_API_KEY;
  // const fetchDevice = await fetch(`https://send-anywhere.com/web/v1/device?api_key=${apiKey}`)
  // const device = fetchDevice.json();
  // device.then(async (res) => {
  //   const deviceKey = res.device_key;
  //   const fetchKey = await fetch(`https://send-anywhere.com/web/v1/key?api_key=${apiKey}&device_key=${deviceKey}`)
  //   const key = await fetchKey.json()
  //   console.log(key)
  // })
  return null
}
export default function Index() {
  // const data = useLoaderData();
  // const onSubmit = (files: File[]) => {
  //   console.log(data)
  // }
  return (
    <section className="flex w-full h-full my-20">
      <div className="flex flex-col items-center w-full md:w-auto md:max-w-screen-md px-10 mx-auto space-y-5">
        <MainTitle />
        <div className="relative flex w-full bg-gray-700 rounded ">
          <input
            type="text"
            maxLength={6}
            className="w-full py-4 md:text-xl font-bold text-center text-white bg-gray-700 rounded outline-none"
            placeholder="Type 6-Digit Number"
          />
          <button className="absolute right-0 h-full p-3 text-white rounded-r hover:bg-gray-600">
            <AiOutlineDownload size={25} />
          </button>
        </div>
        <p className="text-xl font-light text-white">Or</p>
        <FileUploader onFileUploaded={() => {}} />
      </div>
    </section>
  );
}
