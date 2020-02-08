# HOOKS-TS
keyword: hook、typeScript

## 简介
基于kook与typsScript开发的后台应用demo。学习hook和typescript的项目。

## 过程
1、设置alias过程有点复杂：不仅得在webpack.resolve.alias中设置。还要在tsconfig.json中的paths设置。  
举例：  
```
// webpack.congfig.js
resolve: {
  alias: {
    '@api': path.resolve(__dirname, 'src/api/')
  }
}
// tsconfig.json
{
  'compilerOptions': {
    "baseUrl": "./",
    "paths": {
      "@api/*": ["src/api/*"]
    }
  }
}
```

2、定义store中的types
```
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
```

3、部分hook的用法
* useReducer  
const [state, dispatch] = useReducer(reducer, initialArg, init);  

* useMemo  
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);  
返回一个memoized值  
把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算。  
记住，传入 useMemo 的函数会在渲染期间执行。请不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作属于 useEffect 的适用范畴，而不是 useMemo。  
如果没有提供依赖项数组，useMemo 在每次渲染时都会计算新的值。  
你可以把 useMemo 作为性能优化的手段，但不要把它当成语义上的保证。将来，React 可能会选择“遗忘”以前的一些 memoized 值，并在下次渲染时重新计算它们，比如为离屏组件释放内存。先编写在没有 useMemo 的情况下也可以执行的代码 —— 之后再在你的代码中添加 useMemo，以达到优化性能的目的。  

* useContext  
const value = useContext(MyContext);  
接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定。  
当组件上层最近的 <MyContext.Provider> 更新时，该 Hook 会触发重渲染，并使用最新传递给 MyContext provider 的 context value 值。即使祖先使用 React.memo 或 shouldComponentUpdate，也会在组件本身使用 useContext 时重新渲染。  

## 开发
```
# 克隆项目
git clone https://github.com/zhangwinwin/hook-ts

# 进入项目目录
cd hook-ts

# 安装客户端依赖
npm install

# npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动客户端服务
npm start

# 启动服务端服务
npm run start-server
```
浏览器访问 http://localhost:3001