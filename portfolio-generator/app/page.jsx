"use client";
import React, { useEffect, useState } from "react";
import FormInput from "./components/formInput";
const Home = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [whoami, setWhoami] = useState("");
  const [github, setgithub] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);
  const loadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
      console.log("file : ", file);
    }
  };

  return (
    <body className="bg-cyan-950">
      <div className="flex justify-between  items-center mx-20 h-[100vh] translate-y-[200px]">
        <div className="h-[400px] w-[40%] rounded-lg shadow-black py-5 shadow-xl bg-cyan-  justify-center flex items-center flex-col">
          <div className="w-[260px] h-12  rounded-md text-teal-800 cursor-pointer">
            <div className="bg-gray-900 w-[260px] h-12 flex justify-center items-center rounded-md text-teal-600 absolute z-[1] cursor-pointer pointer-events-none">
              Selectionnez une image
            </div>

            <input
              className="overflow-hidden absolute w-[260px] h-12l z-0"
              type="file"
              onChange={(e) => {
                loadImage(e);
              }}
            />
          </div>
          <FormInput placeholder="Tools" value={tags} setValue={setTags} />
          <FormInput
            placeholder="name"
            maxLength={50}
            value={name}
            setValue={setName}
          />

          <FormInput
            maxLength={50}
            placeholder="position"
            value={position}
            setValue={setPosition}
          />
          <FormInput
            placeholder="whoami"
            maxLength={200}
            value={whoami}
            setValue={setWhoami}
          />

          <select name="Socials" id="soc">
            <option value="Github">Github</option>
            <option value="Facebook">Facebook</option>
          </select>
        </div>
        <div className="h-[752px] w-[55%] bg-gray-900 rounded-lg shadow-gray-500 ">
          <RenderTags
            tags={tags}
            name={name}
            whoami={whoami}
            position={position}
            image={image}
          />
        </div>
      </div>{" "}
    </body>
  );
};
const RenderTags = ({ tags, name, whoami, position, image }) => {
  const [element, setElement] = useState([""]);
  useEffect(() => {
    if (tags) {
      const temp = tags.replace(", ", " ");

      setElement(temp.split(" "));
    }
  }, [tags]);
  return (
    <div className="text-white text-xl relative">
      {image && (
        <img
          src={image}
          alt="Uploaded"
          className="w-[112px] h-[112px] rounded-full absolute left-[50%] translate-x-[-50%] translate-y-[-50%]
          border-gray-500 border-[2px]"
        />
      )}
      <ul className="mx-auto flex justify-center flex-wrap w-[80%] pt-[66px]">
        {console.log(element)}
        {element.map((tag) => {
          return <li className="ml-2">#{tag}</li>;
        })}
      </ul>
      <hr className="my-3 h-[0.1px] shadow-md border-gray-800" />
      <div className="ml-8">
        <div>
          <p className=" mb-3">
            <span className="text-blue-400">const</span>
            {"  "}
            <span className="text-green-400">aboutMe</span> ={"  "}
            <span className="text-blue-400">function</span>(){"  {"}
          </p>
          <span className="text-pink-500 ml-5">return</span> {"  {"}
          <div className="ml-10 mr-10 mt-2">
            <p className="mb-2">
              {" "}
              name: <span className="text-orange-400">"{name}"</span>,
            </p>
            <p className="mb-2">
              position:{" "}
              <div className="text-orange-400 inline-block">"{position}"</div>,
            </p>
            <p className="mb-2">
              whoami: <span className="text-orange-400">"{whoami}"</span>,
            </p>
          </div>
          <span className="ml-5">{"}"}</span> <br />
          {"}"}
        </div>
      </div>
      <div className="ml-8">
        <div>
          <p className=" mb-3">
            <span className="text-blue-400">const</span>
            {"  "}
            <span className="text-green-400">connectWithMe</span> ={"  "}
            <span className="text-blue-400">function</span>(){"  {"}
          </p>
          <span className="text-pink-500 ml-5">return</span> {"  {"}
          <div className="ml-10 mr-10 mt-2">
            <p className="mb-2">
              {" "}
              github:{" "}
              <span className="text-orange-400">
                "<a href="#">@github</a>"
              </span>
              ,
            </p>
            <p className="mb-2">
              facebook:{" "}
              <div className="text-orange-400 inline-block">
                "<a href="#">@facebook</a>"
              </div>
              ,
            </p>
            <p className="mb-2">
              Linkedin:{" "}
              <span className="text-orange-400">
                "<a href="#">@Linkedin</a>"
              </span>
              ,
            </p>
          </div>
          <span className="ml-5">{"}"}</span> <br />
          {"}"}
        </div>
      </div>
    </div>
  );
};
export default Home;
