import Son from "@/Components/Son";
import Test from "@/Components/Test";
import { Component, Vue } from "vue-facing-decorator";

@Component
export default class Index extends Vue {
  n = 0;

  loading = true;
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }

  tigger() {
    this.n = this.n ? 0 : 500;
  }

  render() {
    return <Son></Son>;

    let ls = [];
    for (let i = 0; i < this.n; i++) {
      ls.push(<Test>1</Test>);
    }
    return (
      <div v-loading={this.loading} element-loading-text="正在加载..." element-loading-background="black">
        {this.n ? <button onClick={this.tigger}>测试1</button> : <button onClick={this.tigger}>测试2</button>}

        {ls}
      </div>
    );
  }
}
