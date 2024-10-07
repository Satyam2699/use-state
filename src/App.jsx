import React from "react";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

// function App() {
//   const [banned, setBanned] = useState(true);

//   return (
//     <div className="p-4">
//       <h1>{banned.toString()}</h1>
//       <button
//         className=" px-3 py-1 bg-blue-600 mt-3 text-white"
//         onClick={() => setBanned(!banned)}
//       >
//         Change
//       </button>
//     </div>
//   );
// }

// function App() {
//   const [val, setVal] = useState(10);

//   return (
//     <div className="p-4">
//       <h1>{val}</h1>
//       <button
//         className=" px-3 py-1 bg-blue-600 mt-3 text-white"
//         onClick={() => setVal((prev) => prev + 1)}
//       >
//         Change
//       </button>
//     </div>
//   );
// }

// function App() {
//   const [val, setVal] = useState({ name: "satyam", isBanned: false });

//   return (
//     <div className="p-4">
//       <h1> name : {val.name}</h1>
//       <h2> banned : {val.isBanned.toString()}</h2>
//       <button
//         className=" px-3 py-1 bg-blue-600 mt-3 text-white rounded-full"
//         onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
//       >
//         Change
//       </button>
//     </div>
//   );
// }

// function App() {
//   const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);
//   return (
//     <div className="p-10">
//       {val.map((item) => (
//         <h1>{item}</h1>
//       ))}

//       <button
//         className="px-3 py-1 bg-blue-600 mt-3 text-white rounded-full"
//         onClick={() => {
//           setVal(() => {
//             return val.filter((index) => index !== val.length - 1);
//           });
//         }}
//       >
//         Change
//       </button>
//     </div>
//   );
// }

// function App() {
//   const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);
//   return (
//     <div className="p-10">
//       {val.map((item) => (
//         <h1>{item}</h1>
//       ))}

//       <button
//         className="px-3 py-1 bg-blue-600 mt-3 text-white rounded-full"
//         onClick={() => {
//           setVal(() => {
//             return val.filter((index) => index % 2 !== 0);
//           });
//         }}
//       >
//         Change
//       </button>
//     </div>
//   );
// }

// function App() {
//   const [val, setVal] = useState([
//     { name: "satyam", age: 25 },
//     { name: "harsh", age: 23 },
//     { name: "shivam", age: 26 },
//   ]);
//   return (
//     <div className="p-10">
//       {val.map((val) => (
//         <div>
//           <h1>{val.name}</h1>
//           <h2>{val.age}</h2>
//         </div>
//       ))}

//       <button
//         className="px-3 py-1 bg-blue-600 mt-3 text-white rounded-full"
//         onClick={() =>
//           setVal(() =>
//             val.map((item) =>
//               item.name == "harsh" ? { name: "harsh", age: 24 } : item
//             )
//           )
//         }
//       >
//         Change
//       </button>
//     </div>
//   );
// }

function App() {
  const [value, setval] = useState(false);
  return (
    <div className="h-screen w-full bg-gray-400 flex items-center justify-center ">
      <div className=" relative h-52 w-96 bg-gray-600 rounded-md flex overflow-hidden">
        <img
          className={` ease-in-out duration-[500ms] shrink-0 h-full w-full object-cover ${
            value === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          }`}
          src="https://images.unsplash.com/photo-1713528193388-6396f3cce0bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <img
          className={` ease-in-out duration-[500ms] shrink-0 h-full w-full object-cover ${
            value === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          }`}
          src="https://images.unsplash.com/photo-1713813091339-6f0581cc0db6?q=80&w=2049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <span
          onClick={() => setval(() => !value)}
          className="absolute h-16 w-16 rounded-full  bg-[#dadada8b] flex items-center justify-center bottom-[0%] bg-blue left-[50%] -translate-x-[50%] -translate-y-[50%] "
        >
          <FaArrowRightLong />
        </span>
      </div>
    </div>
  );
}

export default App;
