/**
 * Returns a copy of the collection with the value at the key path set to the provided value.
 * setIn<C>(collection: C, keyPath: Iterable<any>, value: any): C
 */
import { setIn } from 'immutable'
import { State, Reducer } from './types'

export const initialState: State = {
  agents: [],
  notice: {
    loading: undefined,
    newResourceAgentId: undefined // 当前正在添加的resource的agentid
  }
}

const reducer: Reducer = (state, action) => {
  state = state || [];

  switch (action.type) {
    case 'AGENTS_INIT':
      return setIn(state, ['agents'], [...action.payload]);
    case 'RESOURCES_ADD': {
      const { payload } = action;
      return setIn(
        state,
        ['agents'],
        state.agents.map(agent => 
          agent.id === payload.id ? {
            ...agent,
            resources: [...agent.resources, ...payload.data]
          } : agent
        )
      )
    }
    case 'RESOURCES_DELETE': {
      const {payload} = action;
      return setIn(
        state,
        ['agents'],
        state.agents.map(agent =>
          agent.id === payload.id ? {
            ...agent,
            resources: agent.resources.filter((_, index) => 
              index !== payload.data
            )
          } : agent
        )
      )
    }
    case 'NOTICE_START':
      return setIn(state, ['notice', 'loading'], true);
    case 'NOTICE_STOP':
      return setIn(state, ['notice', 'loading'], false);
    case 'NOTICE_RESOURCE_NEW':
      return setIn(state, ['notice', 'newResourceAgentId'], action.payload);
    case 'NOTICE_RESOURCE_CLOSE':
      return setIn(state, ['notice', 'newResourceAgentId'], undefined);
    default:
      return state;
  }
}

export default reducer