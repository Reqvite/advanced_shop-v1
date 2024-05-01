// import {Slider} from '@mui/material';
// import {Controller, useForm} from 'react-hook-form';

// export function TestForm() {
//   const {control, handleSubmit} = useForm();

//   const test = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className="registerForm_Container">
//       <form onChange={handleSubmit(test)}>
//         <Controller
//           control={control}
//           name="test"
//           defaultValue={50}
//           render={({field}) => <Slider {...field} />}
//         />
//         <Controller
//           control={control}
//           name="input"
//           defaultValue={''}
//           render={({field}) => <input {...field} />}
//         />
//       </form>
//     </div>
//   );
// }

// export function TestForm1() {
//   return (
//     <div className="registerForm_Container">
//       <form onChange={(e) => console.log(e)}>
//         <Slider />
//         <input type="text" />
//       </form>
//     </div>
//   );
// }

// export function TestForm2() {
//   const {control, handleSubmit} = useForm();

//   const test = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className="registerForm_Container">
//       <form onChange={handleSubmit(test)}>
//         <Controller
//           control={control}
//           name="test"
//           defaultValue={50}
//           render={({field}) => <Slider {...field} />}
//         />
//         <Controller
//           control={control}
//           name="input"
//           defaultValue={''}
//           render={({field}) => <input {...field} />}
//         />
//       </form>
//     </div>
//   );
// }
