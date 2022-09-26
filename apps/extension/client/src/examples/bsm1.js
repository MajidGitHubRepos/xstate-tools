export const addbookMachine = {
    id: 'addBooks',
    initial: 'addNew',
    states: {
      addNew: {},
      adding: {
        invoke: {
          id: 'addingBook',
          src: addingBook,
          onDone: {
            target: 'success',
            actions: assign({ fields: (_context, event) => event.data }),
          },
          onError: {
            target: 'failed',
            actions: assign({ error: (_context, event) => event.data }),
          },
        },
      },
      success: {},
      failed: {},
    },
   };