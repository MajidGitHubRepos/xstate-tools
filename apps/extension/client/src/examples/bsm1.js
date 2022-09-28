// import { actions, assign, createMachine, interpret, send } from 'xstate';
// import { raise } from 'xstate/lib/actions';
// const { respond } = actions;

// const propertyMachine = createMachine({
//   id: 'property',
//   context: {
//     X: 1,
//   },
//   initial: 'good',
//   states: {
//     good: {
//       on: {
//         MONE: {
//           actions: [
//             respond('MZERO', { delay: 1000 }),
//             assign({
//               X: (_, e) => e.myParam,
//             }),
//           ],
//           target: 'good',
//         },
//         MTWO: {
//           actions: [
//             respond('MZERO', { delay: 1000 }),
//             assign({
//               X: (_, e) => e.myParam,
//             }),
//             raise('CHONE'),
//           ],
//         },
//         MTHREE: {
//           actions: [
//             respond('MZERO', { delay: 1000 }),
//             assign({
//               X: (_, e) => e.myParam,
//             }),
//           ],

//           target: 'bad',
//         },
//       },
//     },
//     bad: {
//       entry: raise('CHTWO'),
//       on: {
//         CHTWO: {
//           cond: (context) => context.X % 5 === 0,
//           target: 'good',
//         },
//       },
//     },
//   },
//   on: {
//     CHONE: [
//       {
//         cond: (context) => context.X % 2 === 0,
//         target: 'good',
//       },
//       {
//         target: 'bad',
//       },
//     ],
//   },
// });

// const behaviorMachine = createMachine({
//   id: 'behavior',
//   initial: 'idle',
//   states: {
//     idle: {
//       on: {
//         M1: { target: 'First' },
//         M2: { target: 'Second' },
//         M3: { target: 'Third' },
//       },
//     },
//     First: {
//       invoke: {
//         id: 'property',
//         src: propertyMachine,
//       },
//       entry: send({ type: 'MONE', myParam: 2 }, { to: 'property' }),
//       on: {
//         MZERO: { target: 'idle' },
//       },
//     },
//     Second: {
//       invoke: {
//         id: 'property',
//         src: propertyMachine,
//       },
//       entry: send(
//         { type: 'MTWO', myParam: Math.floor(Math.random() * 100) },
//         { to: 'property' },
//       ),
//       on: {
//         MZERO: { target: 'idle' },
//       },
//     },
//     Third: {
//       invoke: {
//         id: 'property',
//         src: propertyMachine,
//       },
//       entry: send({ type: 'MTHREE', myParam: 7 }, { to: 'property' }),
//       on: {
//         MZERO: { target: 'idle' },
//       },
//     },
//   },
// });

// const service = interpret(behaviorMachine).start(); //behaviorMachine, propertyMachine
// service.subscribe((state) => {
//   console.log(state.event, state.value, state.context);
// });
// window.service = service;
