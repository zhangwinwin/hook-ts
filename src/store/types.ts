export type Resources = ('Firefox' | 'Safari' | 'Chrome' | 'Ubuntu')[]
export type Os = 'windows' | 'macos' | 'centos' | 'debian';

export interface AddResources {
  id: number; // agent id
  data: Resources; // 表示要添加的资源
}

export interface DeleteResources {
  id: number;
  data: number; // agent id 对应的 resource index
}

export interface Agent {
  name: string;
  os: Os;
  status: string;
  type: string;
  ip: string;
  location: string;
  resources: Resources;
  id: number;
}

export type Agents = Agent[]

export interface Notice {
  loading: undefined | boolean;
  newResourceAgentId: undefined | number;
}

export interface State {
  agents: Agents;
  notice: Notice
}

export type Action =
  | { type: 'AGENTS_FETCH' } // API 获取 agents 数据
  | { type: 'AGENTS_INIT'; payload: Agent[] }
  | { type: 'RESOURCES_ADD'; payload: AddResources }
  | { type: 'RESOURCES_DELETE'; payload: DeleteResources }
  | { type: 'NOTICE_RESOURCE_CLOSE' }
  | { type: 'NOTICE_RESOURCE_NEW'; payload: number }
  | { type: 'NOTICE_START' }
  | { type: 'NOTICE_STOP' };

export type Reducer = (state: State, action: Action) => State;