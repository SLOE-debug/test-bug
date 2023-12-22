import { ElSelectV2 } from "element-plus";
import { Component, Vue } from "vue-facing-decorator";

@Component
export default class App extends Vue {
  ls = [];

  add() {
    if (this.ls.length) {
      this.ls = [];
    } else {
      for (let i = 0; i < 500; i++) {
        this.ls.push({ val: "" });
      }
    }
  }

  render() {
    return (
      <>
        <button onClick={this.add}>测试</button>
        {this.ls.map((m) => {
          let data = [];
          for (let i = 0; i < 3500; i++) {
            data.push({ label: i, value: i });
          }
          return <ElSelectV2 v-model={m.val} options={data}></ElSelectV2>;
        })}
      </>
    );
  }
}
