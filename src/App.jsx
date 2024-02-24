import CounterApp from "./components/CounterApp"
import LearnCSSModule from "./components/LearnCSSModule"
import LearnCSSModule2 from "./components/LearnCSSModule2"
import LearnComponent from "./components/LearnComponent"
import LearnConditionalRender from "./components/LearnConditionalRender"
import LearnCustomHook from "./components/LearnCustomHook"
import LearnEvent from "./components/LearnEvent"
import LearnExternalCSS from "./components/LearnExternalCSS"
import LearnExternalCSS2 from "./components/LearnExternalCSS2"
import LearnForm from "./components/LearnForm"
import LearnInlineCSS from "./components/LearnInlineCSS"
import LearnJSX from "./components/LearnJSX"
import LearnLiftingStateUp from "./components/LearnLiftingStateUp"
import LearnMap from "./components/LearnMap"
import LearnMemo from "./components/LearnMemo"
import LearnProps from "./components/LearnProps"
import LearnState from "./components/LearnState"
import LearnTailwind from "./components/LearnTailwind"
import LearnUseCallBack from "./components/LearnUseCallBack"
import LearnUseEffect from "./components/LearnUseEffect"
import LearnUsingEnv from "./components/LearnUsingEnv"

function App() {
  let role = "Developer"
  const getData = (data) => {
    console.log(data)
  }
  return (
    <>
      <h1>Hello React</h1>
      <LearnTailwind/>
      <LearnUsingEnv/>
      <LearnForm/>
      <LearnCSSModule/>
      <LearnCSSModule2/>
      <LearnExternalCSS/>
      <LearnExternalCSS2/>
      <LearnInlineCSS/>
      <LearnMap/>
      <LearnConditionalRender/>
      <LearnCustomHook/>
      <LearnUseCallBack/>
      <LearnMemo/>
      <LearnUseEffect />
      <CounterApp/>
      <LearnComponent/>
      <LearnJSX/>
      <LearnProps name="prince_dobariya" role={role}/>
      <LearnEvent/>
      <LearnLiftingStateUp myClick={getData}/>
      <LearnState />
    </>
  )
}

export default App
