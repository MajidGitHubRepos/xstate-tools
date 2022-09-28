import { inspect } from '@xstate/inspect';
import {
  actions,
  assign,
  createMachine,
  interpret,
  MachineConfig,
  send,
  sendParent,
} from 'xstate';

const { respond } = actions;

export interface WebViewMachineContext {
  config: MachineConfig<any, any, any>;
  uri: string;
  index: number;
  guardsToMock: string[];
  active_IBSM: boolean;
  active_IPSM: boolean;
}

export type VizWebviewMachineEvent =
  | {
      type: 'RECEIVE_SERVICE';
      count: 0;
      config: MachineConfig<any, any, any>;
      uri: string;
      index: number;
      guardsToMock: string[];
    }
  | {
      type: 'UPDATE';
      count: 0;
      config: MachineConfig<any, any, any>;
      uri: string;
      index: number;
      guardsToMock: string[];
    }
  | {
      type: 'REQ_IBSM';
      count: 0;
      config: MachineConfig<any, any, any>;
      uri: string;
      index: number;
      guardsToMock: string[];
    }
  | {
      type: 'REQ_IPSM';
      count: 0;
      config: MachineConfig<any, any, any>;
      uri: string;
      index: number;
      guardsToMock: string[];
    }
  | {
      type: 'RES_IBSM';
      count: 0;
      config: MachineConfig<any, any, any>;
      uri: string;
      index: number;
      guardsToMock: string[];
    }
  | {
      type: 'RES_IPSM';
      count: 0;
      config: MachineConfig<any, any, any>;
      uri: string;
      index: number;
      guardsToMock: string[];
    };

const machine_RA = createMachine({
  initial: 'init',
  id: 'MRA',
  states: {
    init: {
      on: {
        onPing: {
          //target: 'pong',
          actions: [
            () => {
              console.log('Pong');
            },
            'sendPong',
            'updatePongCount',
          ],
        },
      },
    },
    done: {
      //type: 'final',
      entry: [
        () => {
          console.log('M2 is done!');
        },
      ],
    },
  },
}).withConfig({
  actions: {
    sendPong: sendParent('onPong', {
      delay: 200,
    }),
    updatePongCount: () => {
      const start = performance.now();
    },
  },
});

const machine = createMachine<WebViewMachineContext, VizWebviewMachineEvent>({
  initial: 'waitingForFirstContact',
  context: {
    config: {},
    uri: '',
    index: 0,
    guardsToMock: [],
    active_IBSM: true,
    active_IPSM: true,
  },
  invoke: {
    src: () => (send) => {
      window.addEventListener('message', (event) => {
        try {
          send(event.data);
          console.log(event);
        } catch (e) {
          console.warn(e);
        }
      });
    },
  },
  on: {
    RECEIVE_SERVICE: {
      target: '.hasService',
      actions: assign((context, event) => {
        return {
          config: event.config,
          index: event.index,
          uri: event.uri,
          guardsToMock: event.guardsToMock || [],
        };
      }),
      internal: false,
    },
  },

  states: {
    waitingForFirstContact: {},
    hasService: {
      on: {
        UPDATE: {
          cond: (context, event) => {
            return context.uri === event.uri && context.index === event.index;
          },
          target: '.startingInspector',
          actions: assign((context, event) => {
            return {
              config: event.config,
              index: event.index,
              uri: event.uri,
              guardsToMock: event.guardsToMock || [],
            };
          }),
          internal: false,
        },
      },
      invoke: {
        src: () => () => {
          const inspector = inspect({
            iframe: () =>
              document.getElementById('iframe') as HTMLIFrameElement,
            url: `https://xstate-viz-git-farskid-embedded-mode-statelyai.vercel.app/viz/embed?inspect&zoom=1&pan=1&controls=1`,
          });

          return () => {
            inspector!.disconnect();
          };
        },
      },
      initial: 'startingInspector',
      states: {
        startingInspector: {
          after: {
            100: 'startingIRA',
          },
        },
        startingIRA: {
          after: {
            100: {
              target: 'startingIBSM',
              cond: 'cond_active_IBSM',
              actions: 'deactive_IBMS',
            },
          },
          on: {
            REQ_IPSM: {
              // cond: 'condInT3',
              target: 'startingIPSM',
              actions: ['log'],
            },
            REQ_IBSM: {
              target: 'startingIBSM',
              actions: ['log'],
            },
          },
          invoke: {
            id: 'MRA',
            src: machine_RA,
            //========[ra4Xstate-IRA]=========
            //TODO:
            //Listening to a message/data from IRA
            //Consume the message/data and go to the next configuration
            //Sending the configuration to IRA
            //================================
          },
          entry: [
            send(
              {
                type: 'onPing',
              },
              {
                to: 'MRA',
                delay: 200,
              },
            ),
            () => {
              console.log('Ping');
            },
          ],
        },
        //=================================[IBSM]
        startingIBSM: {
          after: {
            100: {
              target: 'startingIPSM',
              cond: 'cond_active_IPSM',
              actions: 'deactive_IPSM',
            },
          },
          on: {
            RES_IBSM: {
              target: 'startingIRA',
              actions: ['log'],
            },
          },
          invoke: {
            src: (context) => (send) => {
              const guards: Record<string, () => boolean> = {};

              context.guardsToMock?.forEach((guard) => {
                guards[guard] = () => true;
              });

              context.config.context = {};
              console.log(context);
              const machine = createMachine(context.config || {}, {
                guards,
              });
              const service = interpret(machine, {
                devTools: true,
              }).start();
              //========[ra4Xstate-IBSM]=========
              //TODO:
              //=================
              return () => {
                service.stop();
              };
            },
          },
        },
        //=================================[IPSM]
        startingIPSM: {
          on: {
            RES_IPSM: {
              target: 'startingIRA',
              actions: ['log'],
            },
          },
          invoke: {
            src: (context) => (send) => {
              const guards: Record<string, () => boolean> = {};

              context.guardsToMock?.forEach((guard) => {
                guards[guard] = () => true;
              });

              context.config.context = {};
              console.log(context);
              const machine = createMachine(context.config || {}, {
                guards,
              });
              const service = interpret(machine, {
                devTools: true,
              }).start();
              //========[ra4Xstate-IPSM]=========
              //TODO:
              //=================
              return () => {
                service.stop();
              };
            },
          },
        },
      },
    },
  },
}).withConfig({
  //it alows us to specify actions and etc.
  actions: {
    log: () => console.log('transition log!'),
    runAction1: () => console.log('I am running the action1 in t1!'),
    runAction2: () => console.log('I am running the action2 in t1!'),
    fun1: () => console.log('You just entered to s1!'),
    deactive_IBMS: () =>
      assign({
        active_IBSM: false,
      }),
    deactive_IPSM: () =>
      assign({
        active_IPSM: false,
      }),
    updateContextS1: () =>
      assign({
        // count: (context) => context.count + 25,
      }),
    updateContextT3WithEvePayload: () =>
      assign({
        // count: (context, event) => context.count * event.value,
      }),
  },
  guards: {
    cond_active_IBSM: (context) => context.active_IBSM == true,
    cond_active_IPSM: (context) => context.active_IPSM == true,
  },
});

interpret(machine).start();
