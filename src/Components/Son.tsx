import { ElButton, ElSelectV2 } from "element-plus";
import { Component, Vue } from "vue-facing-decorator";

@Component
export default class Son extends Vue {
  data = [];
  render() {
    return <ElSelectV2 options={this.data}></ElSelectV2>;
  }
}
