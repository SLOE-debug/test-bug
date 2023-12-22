import { ElInput, ElSelectV2 } from "element-plus";
import { Component, Vue } from "vue-facing-decorator";
import Test from "./Components/Test";

@Component
export default class App extends Vue {
  n = 0;
  render() {
    return (
      <>
        <button onClick={() => (this.n = this.n ? 0 : 1000)}>测试</button>
        {(() => {
          let ls = [];
          for (let i = 0; i < this.n; i++) {
            ls.push(<Test></Test>);
          }
          return ls;
        })()}
      </>
    );
  }
}
