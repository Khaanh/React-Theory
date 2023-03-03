import { useEffect } from "react";

// // export default function useOne(cb) {
// //   useEffect(() => {
// //     cb(console.log())
// //   }, [])

// // }

// export default function useOne(cb) {
//   useEffect(() => {
//     cb(console.log());
//   }, []);
// }

export default function useOne(cb) {
  useEffect(() => {
    cb(console.log("1111"));
  }, []);
}
